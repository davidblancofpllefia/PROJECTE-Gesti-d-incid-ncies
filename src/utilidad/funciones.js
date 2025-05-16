export const obtenerComentarios = () => {
    return JSON.parse(localStorage.getItem('comentarios')) || [];
};

export const guardarComentario = (nuevoComentario) => {
    const comentarios = obtenerComentarios();
    comentarios.push(nuevoComentario);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
};
