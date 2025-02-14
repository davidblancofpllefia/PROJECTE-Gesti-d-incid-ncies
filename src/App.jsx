import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './vistas/Header';
import Login from './vistas/Login';
import Panel from './vistas/Panel';
import Registro from './vistas/Registro';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Panel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;



