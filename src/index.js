import React from 'react';
import * as ReactDOMClient from "react-dom/client";

import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'

import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from '@mui/system';
import theme from './theme';
import { Container, CssBaseline } from '@mui/material';

import App from './App';
import './index.css'

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth='lg'>
      <Router>
        <App />
      </Router>
    </Container>
  </ThemeProvider>

)