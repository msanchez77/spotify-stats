import React from 'react';
import * as ReactDOMClient from "react-dom/client";

import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <Router>
    <App />
  </Router>
)