import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, ingresa un correo electrónico y una contraseña.");
      return;
    }
  
    const usuaris = JSON.parse(localStorage.getItem("dades_usuaris")) || [];
    
    const usuari = usuaris.find((usuari) => usuari.email === email && usuari.password === password);
    
    if (usuari) {
      setError("");  
      localStorage.setItem("user", JSON.stringify(usuari));  
      navigate("/panel");  
    } else {
      setError("Correo electrónico o contraseña incorrectos.");
    }
  };

  return (
    <div className="pt-5">
      <h1 className="w-100 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="form p-4 border shadow mt-5 mx-auto" style={{ width: "400px" }}>
        <label htmlFor="email" className="mt-2 form-label">User: </label>
        <input
          type="text"
          id="email"
          className="form-control"
          placeholder="usuario@mail.com"
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
        <button type="submit" className="mt-4 w-100 btn btn-primary">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
