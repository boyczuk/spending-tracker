import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import Taskbar from './components/Taskbar';
import theme from './components/theme';
import './App.css';

export default function MyApp() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ThemeProvider theme={theme}>
        <Taskbar />
        <div style={{ flex: 1, marginLeft: '200px', padding: '16px' }}>
          <Home />
        </div>
      </ThemeProvider>
    </div>
  );
}
