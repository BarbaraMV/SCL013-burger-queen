import React, { Fragment } from "react";
import styles from "../css/index.module.css";
//import data from "../menu/menu.json";

import Registro from "./Registro";
import Desayunos from "./Desayunos";
import Almuerzos from "./Almuerzos";
import Bebestibles from "./Bebestibles";
//import ReactDOM from 'react-dom'

const Menu = () => {
 
 const boleta = (e) => {
    console.log(e.target.name);
    const precio = e.target.value;
    const precioPedido = parseInt(precio);
    console.log(parseInt(precio));
    // console.log(e.target.name);
  };
 


  return (
    <Fragment>
      <Registro />
      <div className={styles.generalContainer}>
      <div className={styles.breakfast}>
        <div className={styles.DailyMenu}>
       <Desayunos />
       <Almuerzos />
       <Bebestibles />
       </div>
        <div className={styles.containerRight}>
          <h3>Resumen Pedido</h3>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default Menu;
