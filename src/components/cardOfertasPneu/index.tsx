
//import Style
import "./style.css";

//import imagen 
import imgPneu from "../../assets/img/pneu.png";
import { Link } from "react-router-dom";

//rota
import React from 'react';
import ReactDOM from 'react-dom/client';

 



function Ofertas(props:any) {

<<<<<<< HEAD
    return(
        <div id="prod_slide_1" className="prod_card_promo1">
        <img src= {imgPneu} alt="imagem Pneu" /> 
        <div className="prod_card_azul ">
          <div className="prod_preco">R$5000,00</div>
          <h3>pneu triangle 275/80R</h3>
          <h4>caminhão</h4>
          <span>novidade</span>
        </div>
=======
  return (
    <div id="prod_slide_1" className="prod_card_promo1">
      <img src={Ofertas.imagem.url} alt="imagem Pneu" />
      <div className="prod_card_azul ">
        <div className="prod_preco">R${Ofertas.preco}</div>{/* R$ */}
        <h3>{Ofertas.titulo}</h3>{/* pneu triangle 275/80R */}
        <h4>{ofertas.descricao}</h4>{/* caminhão */}
        <span>novidade</span>
>>>>>>> 9c85112276c772ae75b96c50c36085fdfad9ad79
      </div>
    </div>

  )

}
export default Ofertas;