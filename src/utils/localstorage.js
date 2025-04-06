export const initLocalStorage = () => {
  if (!localStorage.getItem("dades_tiquets")) {
    const tiquetsDePrueba = [
      { id: 1, fecha: "2025-03-14", aula: "A1", grupo: "G1", ordenador: "PC-01", descripcion: "Problema de conexión", alumno: "Juan Pérez", resolto: false },
      { id: 2, fecha: "2025-03-13", aula: "B2", grupo: "G2", ordenador: "PC-02", descripcion: "Pantalla rota", alumno: "Ana López", resolto: true, fechaResuelto: "2025-03-14" }
    ];
    localStorage.setItem("dades_tiquets", JSON.stringify(tiquetsDePrueba));
  }

  if (!localStorage.getItem("dades_usuaris")) {
    const usuarisDePrueba = [
      { email: "usuario@dominio.com", password: "12345" }
    ];
    localStorage.setItem("dades_usuaris", JSON.stringify(usuarisDePrueba));
  }
};




  