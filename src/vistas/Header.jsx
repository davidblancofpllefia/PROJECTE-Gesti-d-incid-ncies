import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div>
          <button className="btn btn-secondary ms-2" onClick={() => navigate("/")}>PANEL</button>
          <button className="btn btn-secondary ms-2" onClick={() => navigate("/login")}>LOGIN</button>
          <button className="btn btn-secondary ms-2" onClick={() => navigate("/registro")}>REGISTRO</button>
        </div>
        <div>
          <span>administrador@fpllefia.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;

