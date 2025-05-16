import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../componentes/UserContext'; // Importamos el contexto del usuario

const IniciarSesion = () => {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');
  const { setUser } = useUser(); // Accedemos a setUser desde el contexto
  const navigate = useNavigate();

  // Obtener usuarios del localStorage
  const obtenerUsuarios = () => {
    return JSON.parse(localStorage.getItem('datosUsuarios')) || [];
  };

  
  const gestionarLogin = (e) => {
    e.preventDefault();

    const usuariosExistentes = obtenerUsuarios();

    // Verificar si el usuario existe
    const usuarioAutenticado = usuariosExistentes.find((usuario) => usuario.email === email && usuario.contrasena === contrasena);
    
    if (!usuarioAutenticado) {
      setMensaje('Usuario o contraseña incorrectos');
      return;
    }

    // Guardar usuario en el contexto y en localStorage
    setUser(usuarioAutenticado);
    localStorage.setItem('usuario', JSON.stringify(usuarioAutenticado));

    // Redirigir al panel
    navigate('/'); 
  };

  return (
<main className="container mt-5">
  <div className="pt-5 d-flex flex-column align-items-center">
    <h1 className="mb-4 text-primary">Bienvenido</h1>
    <form
      onSubmit={gestionarLogin}
      className="p-5 rounded-4 shadow-sm bg-light"
      style={{ width: '380px', border: '1px solid #dee2e6' }}
    >
      <label htmlFor="email" className="form-label fw-semibold">Correo Electrónico</label>
      <input
        type="email"
        className="form-control mb-3"
        placeholder="ejemplo@correo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="pass" className="form-label fw-semibold">Contraseña</label>
      <input
        type="password"
        className="form-control mb-4"
        placeholder="••••••••"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        required
      />

      <button type="submit" className="btn btn-outline-primary w-100">Acceder</button>
    </form>

    {mensaje && <p className="text-muted mt-3">{mensaje}</p>}
  </div>
</main>

  );
};

export default IniciarSesion;
