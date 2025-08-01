import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("El correo electrónico no es válido");
          break;
        case "auth/user-not-found":
          setError("No existe una cuenta con este correo");
          break;
        case "auth/wrong-password":
          setError("Contraseña incorrecta");
          break;
        default:
          setError("Ocurrió un error al iniciar sesión");
      }
    }
  };

  return (
    <>
      <main className="contenido-principal contenedor">
        <h3 className="text-center">Inicio de sesión</h3>
        {error && <p className="errors" style={{ textAlign: "center", marginBottom: "2rem" }}>{error}</p>}
        
        <form className="formulario" onSubmit={handleLogin}>
          <fieldset>
            <legend>Ingresa tus datos</legend>

            <div className="campo">
              <label>E-mail:</label>
              <input 
                type="email" 
                placeholder="Tu Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label>Contraseña:</label>
              <input 
                type="password" 
                placeholder="Tu Contraseña" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

          </fieldset>

          <input className="btn" type="submit" value="Iniciar Sesión" />
        </form>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}>
          <NavLink to="/registro" className="enlace">
            Si no tienes cuenta, puedes registrarte aquí
          </NavLink>
          <NavLink to="/" className="enlace">
            Regresar al inicio
          </NavLink>
        </div>
      </main>
    </>
  );
};

export default Login;