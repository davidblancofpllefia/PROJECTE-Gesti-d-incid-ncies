import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../componentes/UserContext'; 


const tenerTiquets = () => {
    return JSON.parse(localStorage.getItem('dades_tiquets')) || [];  
};


const eliminarTiquet = (codigo, setTiquetsResolts) => {

    const tiquets = tenerTiquets();
    

    const tiquetsActualizados = tiquets.filter(tiquet => tiquet.codigo !== codigo);
    

    localStorage.setItem('dades_tiquets', JSON.stringify(tiquetsActualizados));
    

    setTiquetsResolts(tiquetsActualizados.filter(tiquet => tiquet.estat === 'resolt'));
};

const TiquetsResolts = () => {
    const [tiquetsResolts, setTiquetsResolts] = useState([]);
    const navigate = useNavigate();
    const { user } = useUser();  


    useEffect(() => {
        const tiquets = tenerTiquets().filter(tiquet => tiquet.estat === 'resolt');
        setTiquetsResolts(tiquets);
    }, []);


    const verComentarios = (codigo) => {
        localStorage.setItem('codigo_tiquet', codigo);
        navigate('/comentarios');
    };

    return (
        <div>
            <h2>Tiquets Resueltos</h2>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Fecha</th>
                        <th>Fecha resuelto</th>
                        <th>Aula</th>
                        <th>Grupo</th>
                        <th>Ordenador</th>
                        <th>Descripción</th>
                        <th>Alumno</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tiquetsResolts.map((tiquet) => (
                        <tr key={tiquet.codigo}>
                            <td>{tiquet.codigo}</td>
                            <td>{tiquet.fecha}</td>
                            <td>{tiquet.fechaResuelto}</td>
                            <td>{tiquet.aula}</td>
                            <td>{tiquet.grupo}</td>
                            <td>{tiquet.ordenador}</td>
                            <td>{tiquet.descripcion}</td>
                            <td>{tiquet.alumno}</td>
                            <td>
                                <button 
                                    className="btn btn-info me-2" 
                                    title="Ver comentarios" 
                                    onClick={() => verComentarios(tiquet.codigo)}
                                >
                                    <i className="bi bi-chat-left-text"></i>
                                </button>

                                {user?.rol === 'admin' && (
                                    <button 
                                        className="btn btn-danger" 
                                        title="Eliminar ticket"
                                        onClick={() => eliminarTiquet(tiquet.codigo, setTiquetsResolts)}    
                                    >
                                        <i className="bi bi-trash3"></i>
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TiquetsResolts;
