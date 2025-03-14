import React, { useState, useEffect } from "react";

const TiquetsResolts = () => {
  const [tiquets, setTiquets] = useState([]);

  useEffect(() => {
    const storedTiquets = JSON.parse(localStorage.getItem("dades_tiquets")) || [];
    const resolts = storedTiquets.filter(tiquet => tiquet.resolt); 
    setTiquets(resolts);
  }, []);

  return (
    <div>
      <h2>Tiquets Resolts</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Codi</th>
            <th>Data</th>
            <th>Data Resolt</th>
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
                <td>{tiquet.dataResolt}</td>
                <td>{tiquet.aula}</td>
                <td>{tiquet.descripcio}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No hi ha tiquets resolts.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TiquetsResolts;
