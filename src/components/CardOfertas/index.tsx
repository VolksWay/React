//estilizacao
import "./style.css"

//imagens
import imgCardOfertas from "../../assets/img/caminhao_banner_home.png";

//hooks
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle'
import { EffectFade, Navigation, Pagination } from "swiper";



register();
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


function CardOfertas() {

     // const [imgBanner, setImgBanner] = useState<string>("");
     const [titulo, setTitulo] = useState<string>("");
     const [descricao, setDescricao] = useState<string>("");
     const [link, setLink] = useState<string>("");
 


    const data = [
        { id: "1", image: imgCardOfertas },
        { id: "2", image: imgCardOfertas },
        { id: "3", image: imgCardOfertas },

    ]




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