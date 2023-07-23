import React from 'react';
import logo from "../imagenes/trollface.png"
function Encabezado(){
    return (
        <header className="Encabezado">
            <div className="ContenidoEncabezado">
                <div className="NombrePagina">
                    <img src={logo} className="LogoPagina" alt='imagen encabezado'></img>
                    <h2 className="TituloPagina"> Generador de Memes</h2>
                </div>
                <div className="NumeroProyecto">
                    <h4>Eddie Casanas 2023</h4>
                </div>
            </div>
           
        </header>
    )
}

export default Encabezado