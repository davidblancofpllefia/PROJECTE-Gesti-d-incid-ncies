import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div>
          <Link to="/" className="btn btn-secondary ms-2">PANEL</Link>
          <Link to="/login" className="btn btn-secondary ms-2">LOGIN</Link>
          <Link to="/registro" className="btn btn-secondary ms-2">REGISTRO</Link>
        </div>
        <div>
          <span>administrador@fpllefia.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
