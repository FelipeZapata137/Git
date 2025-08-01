import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <div className="dashboard-container">
      <header className="header_projects">
        <p>Bienvenido - {auth.currentUser?.email}</p>
        <div className="header-actions">
          <button className="theme-toggle">🌙</button>
          <button className="logout-btn" onClick={handleLogout}>Salir</button>
        </div>
      </header>

      <main className="container_projects">
        <section className="form-section">
          <h4>Crear</h4>
          <p>Módulo para crear maquetas</p>

          <form className="route-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre:</label>
              <input 
                type="text" 
                placeholder="Nombre de la maqueta"
                name='nombre'
                required
              />
            </div>

            <div className="form-group">
              <label>Imagen (URL):</label>
              <input 
                type="url" 
                placeholder="URL de imagen de la maqueta"
                name='imagen'
                required
              />
            </div>

            <div className="form-group">
              <label>Precio:</label>
              <input 
                type="number" 
                placeholder="Precio de la maqueta"
                name='precio'
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className="form-group">
              <label>Descripción:</label>
              <textarea 
                placeholder="Descripción de la maqueta"
                name='descripcion'
                required
                rows={4}
              />
            </div>

            <button className="btn" type="submit">Enviar</button>
          </form>
        </section>

        <section className="routes-section">
          <h4>Listar</h4>
          <div className="no-routes">No existen registros...</div>
          <p>Módulo para listar maquetas</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;