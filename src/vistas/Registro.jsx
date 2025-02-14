import React from "react";

const Registro = () => {
  return (
    <div className="pt-5">
      <h1 className="w-100 text-center">Registro</h1>
      <form for="email" className="form p-4 border shadow mt-5 mx-auto" style={{ width: "400px" }}>
        <label htmlFor="email" className="mt-2 form-label">User: </label>
        <input type="text" className="form-control" placeholder="usuario@mail.com" />

        <label htmlFor="pass" className="mt-2 form-label">Contraseña: </label>
        <input type="password" className="form-control" />

        <button type="submit" className="mt-4 w-100 btn btn-primary">Entrar</button>
      </form>
    </div>
  );
};

export default Registro;
