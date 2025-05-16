import React, { useState, useEffect } from 'react';
import Comentario from '../componentes/Comentario';
import { obtenerComentarios, guardarComentario } from '../utilidad/funciones';

export default function Comentarios() {
    const [comentarios, setComentarios] = useState([]);
    const [codigoTiquet, setCodigoTiquet] = useState('');

    useEffect(() => {
        const codigo = localStorage.getItem('codigo_tiquet');
        setCodigoTiquet(codigo);

        const comentariosGuardados = obtenerComentarios().filter(comentario => comentario.codigo === codigo);
        setComentarios(comentariosGuardados);
    }, []);

    const agregarComentario = (nuevoComentario) => {
        guardarComentario(nuevoComentario);
        setComentarios(prevComentarios => [...prevComentarios, nuevoComentario]);
    };

    return (
        <div className="container mt-5">
            <h1>Comentarios</h1>
            <h2 className="my-4">Código ticket: <span>{codigoTiquet}</span></h2>


            <Comentario agregarComentario={agregarComentario} codigoTiquet={codigoTiquet} />

            <div className="mt-4">
                {comentarios.length > 0 ? (
                    comentarios.map((comentario, index) => (
                        <div key={index} className="card p-3 mt-2">
                            <h5 className="text-end">Autor: <span>{comentario.autor}</span><span className="ms-4">{comentario.fecha}</span></h5>
                            <p>{comentario.texto}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay comentarios disponibles.</p>
                )}
            </div>
        </div>
    );
}
