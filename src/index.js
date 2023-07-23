import React from 'react';
import  { createRoot } from 'react-dom/client';
import './styles.css';
import Encabezado from './componentes/Encabezado';
import Cuerpo from './componentes/Cuerpo';

let root = createRoot(document.getElementById("root"));

root.render(<div>
    <Encabezado></Encabezado>
    <Cuerpo></Cuerpo>
  </div>);