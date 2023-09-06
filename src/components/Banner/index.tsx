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


import axios from "axios";
import Parse from 'parse/dist/parse.min.js';
const PARSE_APPLICATION_ID = '1QJ5n2ix95flGl0Rt7b1l4CfbqXuYQcj7VU0oKGd';
const PARSE_JAVASCRIPT_KEY = 'R3yYjaaJbXJNHSCT6NqVjxXZBqZjllwQzTuGUyvi';
const PARSE_REST_API = 'aTuaHYnGDCCvEXeN4j3eyLfGxBbNnqH7zL5UAfxA';
const MASTER_KEY = "F4vFzZm6HASmvFNv9TihqyVvEIPJhxs5uXY9Sebu"
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);





function Banner(props: any) {

    // const swiperRef = useRef<SwiperRef>(null);

    // const swiperApi = swiperRef.current?.swiper;

    // const [imgBanner, setImgBanner] = useState<string>("");
    // const [titulo, setTitulo] = useState<string>("");
    // const [descricao, setDescricao] = useState<string>("");
    // const [link, setLink] = useState<string>("");

    return (
        <>


            {/* TESTE COM PROPS */}
            <div id="banner">
                <div className="container">
                    {/* <h1 className="teste">teste</h1> */}
                    <Swiper
                        // effect={'fade'}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                    >

                        <SwiperSlide>
                            <img
                                src={props.imagem}
                                className="slide-item"
                            />

                            <div className="produtos_banner_conteudo">
                                <h2>{props.titulo}</h2>
                                <p>{props.descricao}
                                </p>
                                <a className="produtos_btn_banner" href="">ver mais</a>
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* <form action="" onSubmit={listarBanner} ><button type="submit" >teste</button></form> */}


            {/* TESTE SEM PROPS */}

            {/* <main id="banner">
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

                                <div className="produtos_banner_conteudo">
                                    <h2>a semana de ofertas já começou!!!</h2>
                                    <p>compre lançamentos exclusivos para quem é do clube e desbloqueie mais das coisas que voce
                                        ama.
                                    </p>
                                    <a className="produtos_btn_banner" href="">ver mais</a>
                                </div>


                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main> */}


        </>
    )

}
export default Banner;