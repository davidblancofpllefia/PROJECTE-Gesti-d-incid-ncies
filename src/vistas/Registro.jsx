import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, ingresa un correo electrónico y una contraseña.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    if (!emailRegex.test(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setError("");

    const usuaris = JSON.parse(localStorage.getItem("dades_usuaris")) || [];
    const usuariExistente = usuaris.find((usuari) => usuari.email === email);
    if (usuariExistente) {
      setError("Este correo electrónico ya está registrado.");
      return;
    }

    const nouUsuari = { email, password };
    usuaris.push(nouUsuari);
    localStorage.setItem("dades_usuaris", JSON.stringify(usuaris));
    
    setSuccess("¡Registro completado con éxito!");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="pt-5">
      <h1 className="w-100 text-center">Registro</h1>
      <form onSubmit={handleSubmit} className="form p-4 border shadow mt-5 mx-auto" style={{ width: "400px" }}>
        <label htmlFor="email" className="mt-2 form-label">Correo electrónico: </label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="usuario@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="mt-2 form-label">Contraseña: </label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="text-danger mt-2">{error}</div>}
        {success && <div className="text-success mt-2">{success}</div>}

        <button type="submit" className="mt-4 w-100 btn btn-primary">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Registro;
