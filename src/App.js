import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greetings from './routes/Greeting';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  </Router>
);

export default App;
