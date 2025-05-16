import React, { useState, useEffect } from 'react';
import { useUser } from '../componentes/UserContext';
import { useNavigate } from 'react-router-dom'; 

const Tiquet = () => {
  const { user } = useUser(); 
  const [formData, setFormData] = useState({
    aula: user?.aula || '',
    grupo: user?.grupo || '',
    ordenador: '',
    descripcion: '',
    alumno: user?.email || '', 
  });

  const [error, setError] = useState('');
  const [dadesTiquets, setDadesTiquets] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const tiquetsGuardados = JSON.parse(localStorage.getItem('dades_tiquets')) || [];
    setDadesTiquets(tiquetsGuardados);
  }, []);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      alumno: user?.email || '',
      aula: user?.aula || '',
      grupo: user?.grupo || '',
    }));
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.aula || !formData.grupo || !formData.ordenador || !formData.descripcion || !formData.alumno) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    const nuevoTiquet = {
      codigo: Math.floor(100 + Math.random() * 900), 
      aula: formData.aula,
      grupo: formData.grupo,
      ordenador: formData.ordenador,
      descripcion: formData.descripcion,
      alumno: formData.alumno, 
      fecha: new Date().toLocaleDateString(),
      estat: 'pendent',
    };

    const nuevosTiquets = [...dadesTiquets, nuevoTiquet];
    setDadesTiquets(nuevosTiquets);
    localStorage.setItem('dades_tiquets', JSON.stringify(nuevosTiquets));

    console.log('Tiquet guardado:', nuevoTiquet);

    setFormData({
      aula: "", 
      grupo: "", 
      ordenador: '',
      descripcion: '',
      alumno: formData.alumno, 
    });

    setError('');

    navigate('/panel'); 
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Formulario de Tiquet</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="alumno" className="form-label">Email del Alumno:</label>
          <input
            type="text"
            codigo="alumno"
            name="alumno"
            className="form-control"
            value={formData.alumno}
            disabled 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="aula" className="form-label">Aula:</label>
          <input
            type="text"
            codigo="aula"
            name="aula"
            className="form-control"
            value={formData.aula}
            onChange={handleChange} 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="grupo" className="form-label">Grupo:</label>
          <input
            type="text"
            codigo="grupo"
            name="grupo"
            className="form-control"
            value={formData.grupo}
            onChange={handleChange} 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ordenador" className="form-label">Ordenador:</label>
          <input
            type="text"
            codigo="ordenador"
            name="ordenador"
            className="form-control"
            value={formData.ordenador}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción:</label>
          <textarea
            codigo="descripcion"
            name="descripcion"
            className="form-control"
            rows="3"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Tiquet;
