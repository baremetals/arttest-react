import React from 'react';
import { Router } from 'react-router-dom'
import MainRouter from 'Router'
import history from 'utils/history'

function App() {
  return (
    <Router history={history}>
      <MainRouter />
    </Router>
  );
}

export default App;
