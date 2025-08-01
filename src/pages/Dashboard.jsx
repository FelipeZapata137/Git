
const Dashboard = () => {

    return (
        <body>
            <section className="header_projects">
                <p>Bienvenido - </p>
                <div className="header-actions">
                    <button className="theme-toggle">🌙</button>
                    <button className="logout-btn">Salir</button>
                </div>
            </section>

            <section className="container_projects">
                <section className="form-section">
                    <h4>Crear</h4>
                    <p>Módulo para crear maquetas</p>

                    <form className="route-form" >

                        <label>Nombre:</label>
                        <input type="text" placeholder="nombre de la maqueta"
                            name='nombre'
                        />

                        <label>Imagen:</label>
                        <input type="url" placeholder="url de imagen de la maqueta"
                            name='imagen'
                        />

                        <label>Precio:</label>
                        <input type="number" placeholder="precio de la maqueta"
                            name='precio'
                        />

                        <label>Descripción:</label>
                        <textarea placeholder="descripión de la maqueta"
                            name='descripcion'
                        />

                        <input className="btn" type="submit" value="Enviar" ></input>
                    </form>
                </section>

                <section className="routes-section">
                    <h4>Listar</h4>
                    <div className="no-routes">No existen registros...</div>
                    <p>Módulo para listar maquetas</p>

                </section>


            </section>
        </body>
    )
}

export default Dashboard