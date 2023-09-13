
//import Style
import "./style.css";

//import imagen 
import imgPneu from "../../assets/img/pneu.png";
import { Link } from "react-router-dom";

//rota
import React from 'react';
import ReactDOM from 'react-dom/client';




 function Ofertas() {

    return(
        <div id="prod_slide_1" className="prod_card_promo1">
        <img src= {imgPneu} alt="imagem Pneu" /> 
        <div className="prod_card_azul ">
          <div className="prod_preco">R$5000,00</div>
          <h3>pneu triangle 275/80R</h3>
          <h4>caminhão</h4>
          <span>novidade</span>
        </div>
      </div>
      
 )
    
}
export default Ofertas;