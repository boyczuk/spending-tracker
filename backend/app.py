from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)

CORS(app)

def init_db():
    with sqlite3.connect('expenses.db') as conn:
        conn.execute('CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT, category TEXT, amount REAL, date STRING)')

@app.route('/api/expenses', methods=['POST'])
def add_expense():
    data = request.json
    description = data.get('description')
    category = data.get('category')
    amount = data.get('amount')
    date = data.get('date')

    if not amount or not description or not category or not date:
        return jsonify({'error': 'Fields empty.'}), 400

    with sqlite3.connect('expenses.db') as conn:
        cursor = conn.cursor()
        cursor.execute('INSERT INTO expenses (description, category, amount, date) VALUES (?, ?, ?, ?)', ( description, category, amount, date))
        conn.commit()

    return jsonify({'message': 'Expense added successfully.'}), 201


@app.route('/api/expenses', methods=['GET'])
def get_expenses():
    with sqlite3.connect('expenses.db') as conn:
        cursor = conn.cursor()
        cursor.execute('SELECT description, category, amount, date FROM expenses')
        expenses = cursor.fetchall()

    result = [
        {
            "description": description,
            "category": category,
            "amount": amount,
            "date": date
        }
        for (description, category, amount, date) in expenses
    ]
    return jsonify(result)


if __name__ == '__main__':
    init_db()
    app.run()
