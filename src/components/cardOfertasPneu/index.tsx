
//import Style
import "./style.css";

<<<<<<< HEAD
//import imagen 
import imgPneu from "../../assets/img/pneu.png";
import { Link } from "react-router-dom";

//rota
import React from 'react';
import ReactDOM from 'react-dom/client';





function CardOfertasPneu( props :any) {

=======
function Ofertas(props: any) {
>>>>>>> c9dd5bf907b3f699770b133af709f53579b0e7ff
  return (
    <div id="prod_slide_1" className="prod_card_promo1">
      <img src={props.imagem.url} alt="imagem Pneu" />
      <div className="prod_card_azul ">
        <div className="prod_preco">R${props.preco}</div>{/* R$ */}
        <h3>{props.titulo}</h3>{/* pneu triangle 275/80R */}
        <h4>{props.descricao}</h4>{/* caminhão */}
        <span>novidade</span>
<<<<<<< HEAD

=======
>>>>>>> c9dd5bf907b3f699770b133af709f53579b0e7ff
      </div>
    </div>
  )
<<<<<<< HEAD

  

}
export default CardOfertasPneu;
=======
}

export default Ofertas;
>>>>>>> c9dd5bf907b3f699770b133af709f53579b0e7ff
