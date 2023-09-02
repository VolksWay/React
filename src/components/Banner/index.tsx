//estilizacao
import "./style.css"

//imagens
import imgBanner from "../../assets/img/banner_produto.png";

//hooks
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { Swiper, SwiperSlide } from "swiper/react"



import { register } from "swiper/element/bundle";

register();
import 'swiper/css.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Banner() {

    const [imgBanner, setImgBanner] = useState<string>("");
    const [titulo, setTitulo] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [link, setLink] = useState<string>("");



    //array de imagens
    const data = [
        { id: "1", image: imgBanner },
        { id: "2", image: imgBanner },
        { id: "3", image: imgBanner },

    ]





    return (
        <>
            <Swiper>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            className="slider-wrapper"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>












            {/* <div id="banner">

                <div className="slider-wrapper produtos_posicionamento">
                    <div className="slider">
                        <div className="banner1">
                            <img id="slide-1" src={imgBanner} />
                            <div className="produtos_banner_conteudo">
                                <h2>a semana de ofertas já começou!!!</h2>
                                <p>
                                    compre lançamentos exclusivos para quem é do clube e desbloqueie
                                    mais das coisas que voce ama.
                                </p>
                                <a
                                    className="produtos_btn_banner"
                                    href="#"
                                >
                                    ver mais
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slider-nav">
                        <Link to="#slide-1"></Link>
                        <Link to="#slide-2"></Link>
                        <Link to="#slide-3"></Link>
                    </div>
                </div>

            </div> */}

        </>
    )

}
export default Banner;