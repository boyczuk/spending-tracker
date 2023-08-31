import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../styles/ExpenseInput.css';

export default function ExpenseInput() {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = React.useState(dayjs());

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formattedDate = date.format('YYYY-MM-DD')

    const formData = {
      description,
      category,
      amount,
      date: formattedDate,
    };
    try {
      await axios.post('http://localhost:5000/api/expenses', formData);

      setDescription('');
      setCategory('');
      setAmount('');
      setDate(dayjs('2023-08-31'));

      console.log('Expense added successfully!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      console.log('Error adding the expense. Please try again later.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="horizontal-form"
      sx={{
        '& > :not(style)': { m: 0.5, height: '8ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ width: '30ch' }}
        id="outlined-basic-description"
        label="description"
        variant="outlined"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <TextField
        sx={{ width: '17ch' }}
        id="outlined-basic-category"
        label="category"
        variant="outlined"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <TextField
        sx={{ width: '10ch' }}
        id="outlined-basic-amount"
        label="amount"
        variant="outlined"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            sx={{ width: '15ch', mt: '0.5ch' }}
            label="date"
            value={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Button type="submit" variant="contained" color="primary" size="small" className='submit__button'>
        Add
      </Button>
    </Box>
  );
}
