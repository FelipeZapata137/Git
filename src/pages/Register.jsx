import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      
      console.log("Usuario registrado:", userCredential.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error completo:", error);
      setError(`Error al registrar: ${error.message}`);
    }
  };

  return (
    <>
      <main className="contenido-principal contenedor">
        <h3 className="text-center">Registro</h3>
        {error && <p className="errors">{error}</p>}
        
        <form className="formulario" onSubmit={handleRegister}>
          <fieldset>
            <legend>Ingresa tus datos</legend>

            <div className="campo">
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo">
              <label>E-mail:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo">
              <label>Contraseña:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>
          </fieldset>

          <button type="submit" className="btn">
            Registrarse
          </button>
        </form>

        <NavLink to="/login" className="enlace">
          ¿Ya tienes cuenta? Inicia sesión
        </NavLink>
      </main>
    </>
  );
};

export default Register;