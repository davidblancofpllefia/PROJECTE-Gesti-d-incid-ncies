import React, { useState, useEffect } from "react";

const TiquetsPendents = () => {
  const [tiquets, setTiquets] = useState([]);

  useEffect(() => {
    const storedTiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];
    const pendents = storedTiquets.filter(tiquet => !tiquet.resolt); 
    setTiquets(pendents);
  }, []);

  return (
    <div>
      <h2>Tiquets Pendents</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Codi</th>
            <th>Data</th>
            <th>Aula</th>
            <th>Descripció</th>
          </tr>
        </thead>
        <tbody>
          {tiquets.length > 0 ? (
            tiquets.map((tiquet) => (
              <tr key={tiquet.id}>
                <td>{tiquet.id}</td>
                <td>{tiquet.data}</td>
                <td>{tiquet.aula}</td>
                <td>{tiquet.descripcio}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No hi ha tiquets pendents.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TiquetsPendents;
