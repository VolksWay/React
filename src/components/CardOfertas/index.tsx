import "./style.css"

//estilizacao
import "./style.css"

//imagens
import imgCardOfertas from "../../assets/img/caminhao_banner_home.png";

//hooks
// import { Link } from "react-router-dom";
// import { useSwipeable } from "react-swipeable";
// import { useEffect, useState } from "react";


function CardOfertas() {
    return (
        <>
            <div id="cardOfertas">

                <div id="offer_slide_1" className="prod_card_ofertas">
                    <h3>constellation 2023</h3>
                    <h4>24.280 6x2 no chassis</h4>
                    <img
                        src={imgCardOfertas}
                        alt="imagem caminhão contstellation 2023 card um"
                    />
                    <span>De R$700.000 / Por R$650.000</span>
                    <h5>Entr. 60% + 24 Parcelas</h5>
                    <a className="prod_btn_card" href="#">
                        estou interessado
                    </a>
                    <h6>oferta válida até 31/05/2023</h6>
                </div>

            </div>

        </>
    )

}
export default CardOfertas;