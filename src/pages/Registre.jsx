import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Registro = () => {
  // Estados para el formulario y mensajes
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Cargar usuarios existentes al iniciar
  const obtenerUsuarios = () => {
    return JSON.parse(localStorage.getItem('datosUsuarios')) || [];
  };

  const gestionarRegistro = (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe de manera tradicional

    // Obtener lista actual de usuarios
    const usuariosExistentes = obtenerUsuarios();

    // Verificar si el usuario ya está registrado
    const usuarioExiste = usuariosExistentes.some((usuario) => usuario.email === email);
    if (usuarioExiste) {
      setMensaje('Este usuario ya está registrado.');
      return;
    }

    // Agregar nuevo usuario con rol predeterminado "user"
    const nuevoUsuario = { email, contrasena, rol: 'user' };
    const nuevosUsuarios = [...usuariosExistentes, nuevoUsuario];

    // Guardar en localStorage
    localStorage.setItem('datosUsuarios', JSON.stringify(nuevosUsuarios));

    // Limpiar el formulario y mostrar mensaje de éxito
    setEmail('');
    setContrasena('');
    setMensaje('Registro exitoso.');

    // Redirigir al inicio de sesión (suponiendo que tienes una ruta para esto)
    Navigate('/inicioSessio');
  };

  return (
      <main className="container mt-5">
  <div className="pt-5 d-flex flex-column align-items-center">
    <h1 className="mb-4 text-success">Crear Cuenta</h1>
    <form
      onSubmit={gestionarRegistro}
      className="p-5 rounded-3 bg-white shadow-sm border border-2"
      style={{ width: '380px' }}
    >
      <label htmlFor="email" className="form-label fw-bold">Correo Electrónico</label>
      <input
        type="email"
        className="form-control mb-3"
        placeholder="tucorreo@ejemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="pass" className="form-label fw-bold">Crea una Contraseña</label>
      <input
        type="password"
        className="form-control mb-4"
        placeholder="Mínimo 6 caracteres"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        required
      />

      <button type="submit" className="btn btn-success w-100">Registrarse</button>
    </form>

    {mensaje && <p className="mt-3 text-secondary text-center">{mensaje}</p>}
  </div>
</main>
  
  );
};

export default Registro;
