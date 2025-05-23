import React, { useState, useEffect } from 'react';
import { useUser } from '../componentes/UserContext'; 
import { useNavigate } from 'react-router-dom';

const AdminUsuarios = () => {
  const [datosUsuarios, setDatosUsuarios] = useState([]);
  const { user, setUser } = useUser(); 

  useEffect(() => {
    const usuariosGuardados = JSON.parse(localStorage.getItem('datosUsuarios')) || [];
    setDatosUsuarios(usuariosGuardados);
  }, []);

  const handleRoleChange = (email, nuevoRol) => {
    const usuariosActualizados = datosUsuarios.map((usuario) =>
      usuario.email === email ? { ...usuario, rol: nuevoRol } : usuario
    );

    setDatosUsuarios(usuariosActualizados);
    localStorage.setItem('datosUsuarios', JSON.stringify(usuariosActualizados));


    if (user && user.email === email) {
      const usuarioActualizado = { ...user, rol: nuevoRol };
      setUser(usuarioActualizado);
      localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Gestión de Usuarios</h1>
      
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Rol</th>
            <th>Cambiar Rol</th>
          </tr>
        </thead>
        <tbody>
          {datosUsuarios.map((usuario) => (
            <tr key={usuario.email}>
              <td>{usuario.email}</td>
              <td>{usuario.rol}</td>
              <td>
                <select
                  value={usuario.rol}
                  onChange={(e) => handleRoleChange(usuario.email, e.target.value)}
                  className="form-select"
                >
                  <option value="user">Usuario</option>
                  <option value="admin">Administrador</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsuarios;
