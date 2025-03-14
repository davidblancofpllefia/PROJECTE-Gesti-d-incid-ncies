import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./vistas/Header";
import Login from "./vistas/Login";
import Panel from "./vistas/Panel";
import Registro from "./vistas/Registro";
import { initLocalStorage } from "./utils/localstorage";

function App() {
  useEffect(() => {
    initLocalStorage();
  }, []);

  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Panel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




