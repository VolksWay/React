//estilizacao
import "./style.css"

//imagens
import imgBanner from "../../assets/img/banner_produto.png";

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






function Banner() {

    // const swiperRef = useRef<SwiperRef>(null);

    // const swiperApi = swiperRef.current?.swiper;

    // const [imgBanner, setImgBanner] = useState<string>("");
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
            <main id="banner">
                <div className="container">
                    <h1 className="teste">teste</h1>


                    <Swiper

                        // effect={'fade'}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img
                                    src={item.image}
                                    className="slide-item"
                                />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>








            {/* <div id="banner">

                <div className="slider-wrapper produtos_posicionamento">
                    <div className="slider">

                        <Swiper
                            slidesPerView={4}
                            pagination={{ clickable: true }}
                            navigation
                        >
                            {data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <img
                                        src={item.image}
                                        className="slider"
                                    />

                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>

                </div>

            </div> */}

        </>
    )

}
export default Banner;