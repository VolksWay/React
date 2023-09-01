//estilizacao
import "./style.css"

//imagens
import imgBanner from "../../assets/img/banner_produto.png";

//hooks
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
// import { useEffect, useState } from "react";


function Banner() {
    return (
        <>
            <main id="banner">

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

            </main>

        </>
    )

}
export default Banner;