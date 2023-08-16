import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useRefreshContext } from './RefreshContext';
import '../styles/ExpenseList.css'

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // get http call to backend to get expenses
    axios.get("http://localhost:5000/api/expenses").then((res) => {
      setExpenses(res.data);
    })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { refresh } = useRefreshContext();

  return (
    <TableContainer component={Paper} className="custom-table-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Description</b></TableCell>
            <TableCell align="right"><b>Category</b></TableCell>
            <TableCell align="right"><b>Amount</b></TableCell>
            <TableCell align="right"><b>Date</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}