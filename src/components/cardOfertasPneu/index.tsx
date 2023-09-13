
//import Style
import "./style.css";

function Ofertas(props: any) {
  return (
    <div id="prod_slide_1" className="prod_card_promo1">
      <img src={props.imagem.url} alt="imagem Pneu" />
      <div className="prod_card_azul ">
        <div className="prod_preco">R${props.preco}</div>{/* R$ */}
        <h3>{props.titulo}</h3>{/* pneu triangle 275/80R */}
        <h4>{props.descricao}</h4>{/* caminhão */}
        <span>novidade</span>
      </div>
    </div>
  )
}

export default Ofertas;