import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/usercontext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useUserContext();

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
          {user ? (
            <div>
              <span>{user.email}</span>
              <button className="btn btn-danger ms-2" onClick={logoutUser}>Logout</button>
            </div>
          ) : (
            <span>administrador@fpllefia.com</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;


