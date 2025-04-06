import React, { useState, useEffect } from "react";

const Panel = () => {
  const [tiquetsPendents, setTiquetsPendents] = useState([]);
  const [tiquetsResolts, setTiquetsResolts] = useState([]);

  useEffect(() => {
    const tiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];
    const pendents = tiquets.filter(t => !t.resuelto);
    const resolts = tiquets.filter(t => t.resuelto);

    setTiquetsPendents(pendents);
    setTiquetsResolts(resolts);
  }, []);

  const marcarResolt = (id) => {
    const tiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];
    const actualitzats = tiquets.map(t =>
      t.id === id ? { ...t, resuelto: true, fechaResuelto: new Date().toISOString().split('T')[0] } : t
    );
    localStorage.setItem("dades_tiquets", JSON.stringify(actualitzats));
    setTiquetsPendents(actualitzats.filter(t => !t.resuelto));
    setTiquetsResolts(actualitzats.filter(t => t.resuelto));
  };

  const eliminarTiquet = (id) => {
    const tiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];
    const actualitzats = tiquets.filter(t => t.id !== id);
    localStorage.setItem("dades_tiquets", JSON.stringify(actualitzats));
    setTiquetsPendents(actualitzats.filter(t => !t.resuelto));
    setTiquetsResolts(actualitzats.filter(t => t.resuelto));
  };

  return (
    <div className="container mt-4">
      <h1>Administración de incidencias</h1>

      <h2 className="mt-5">Tiquets Pendents</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tiquetsPendents.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.fecha}</td>
              <td>{t.aula}</td>
              <td>{t.grupo}</td>
              <td>{t.ordenador}</td>
              <td>{t.descripcion}</td>
              <td>{t.alumno}</td>
              <td>
                <button className="btn btn-success btn-sm me-2" onClick={() => marcarResolt(t.id)}>Resolver</button>
                <button className="btn btn-danger btn-sm" onClick={() => eliminarTiquet(t.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="mt-5">Tiquets Resolts</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Fecha Resuelto</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
          </tr>
        </thead>
        <tbody>
          {tiquetsResolts.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.fecha}</td>
              <td>{t.fechaResuelto || "N/A"}</td>
              <td>{t.aula}</td>
              <td>{t.grupo}</td>
              <td>{t.ordenador}</td>
              <td>{t.descripcion}</td>
              <td>{t.alumno}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Panel;
