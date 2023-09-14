import "./style.css"
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD

import imgBanner from "../../assets/img/banner_produto.png";
import setaEsquerda from "../../assets/img/ofertas-especiais-esquerda.svg"
 import caminhaoOfertas from "../../assets/img/caminhao_banner_home.png"
 import setaDireita from "../../assets/img/ofertas-especiais-direita.svg"
 import caminhaoPromocoes from "../../assets/img/img_produto.png"
import cardNoticias1 from "../../assets/img/card1_noticias.png"
 import cardNoticias2 from "../../assets/img/card2_noticias.png"
 import cardNoticias3 from "../../assets/img/card3_noticias.png"
import cardNoticias4 from "../../assets/img/card4_noticias.png"
 import cardNoticias5 from "../../assets/img/card5_noticias.png"
 import cardNoticias6 from "../../assets/img/card6_noticias.png"
 import CardOfertasPneu from "../../components/CardOfertasPneu";

import axios from "axios";
=======
import imgBanner from "../../assets/img/banner_produto.png";
import setaEsquerda from "../../assets/img/ofertas-especiais-esquerda.svg"
import caminhaoOfertas from "../../assets/img/caminhao_banner_home.png"
import setaDireita from "../../assets/img/ofertas-especiais-direita.svg"
import caminhaoPromocoes from "../../assets/img/img_produto.png"
import CardNoticiasRecentes from '../../components/CardNoticiasRecentes';
>>>>>>> c9dd5bf907b3f699770b133af709f53579b0e7ff
import Parse from 'parse/dist/parse.min.js';
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import CardOfertas from "../../components/CardOfertas";
import api from "../../utils/api";

const PARSE_APPLICATION_ID = '1QJ5n2ix95flGl0Rt7b1l4CfbqXuYQcj7VU0oKGd';
const PARSE_JAVASCRIPT_KEY = 'R3yYjaaJbXJNHSCT6NqVjxXZBqZjllwQzTuGUyvi';
const PARSE_REST_API = 'aTuaHYnGDCCvEXeN4j3eyLfGxBbNnqH7zL5UAfxA';
const MASTER_KEY = "F4vFzZm6HASmvFNv9TihqyVvEIPJhxs5uXY9Sebu"
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

function Produtos() {
    const [conteudoBanner, setConteudoBanner] = useState<any[]>([]);
    const [conteudoOfertas, setConteudoOfertas] = useState<any[]>([]);
<<<<<<< HEAD
    const [conteudoPromocoes, setConteudoPromocoes] = useState<any[]>([]);
    
=======
    const [conteudoNoticiasR, setConteudoNoticiasR] = useState<any[]>([]);
>>>>>>> c9dd5bf907b3f699770b133af709f53579b0e7ff

    function listarBanner() {
        // event.preventDefault();
        console.log("teste");

        // /* console.log(cpf) */
        api.get(`/banner`,
            {
                headers: {
                    'X-Parse-Application-Id': PARSE_APPLICATION_ID,
                    'X-Parse-REST-API-Key': PARSE_REST_API,
                    'X-Parse-Master-Key': MASTER_KEY,
                }
            }).then((resposta) => {
                if (resposta.status === 200) {
                    // Se a resposta for 201, a solicitação foi bem-sucedida
                    //200 pegar / 201 criar
                    //setMensagemAguarde("Enviado")
                    setConteudoBanner(resposta.data.results)
                    console.log("entrouuu", resposta.data.results)
                }
            })
            .catch((erro) => {
                console.log(erro); // Trata erros de solicitação
            });
    }







    function listarOfertas() {
        // event.preventDefault();
        console.log("teste");

        // /* console.log(cpf) */
        api.get(`/ofertas`,
            {
                headers: {
                    'X-Parse-Application-Id': PARSE_APPLICATION_ID,
                    'X-Parse-REST-API-Key': PARSE_REST_API,
                    'X-Parse-Master-Key': MASTER_KEY,
                }
            }).then((resposta) => {
                if (resposta.status === 200) {
                    // Se a resposta for 201, a solicitação foi bem-sucedida
                    //200 pegar / 201 criar
                    //setMensagemAguarde("Enviado")
                    setConteudoOfertas(resposta.data.results)
                    console.log("entrouuu ofertas", resposta.data.results)
                }
            })
            .catch((erro) => {
                console.log(erro); // Trata erros de solicitação
            });
    }

<<<<<<< HEAD



    function listarPromocoes() {
=======
    function listarNoticiasR() {
>>>>>>> c9dd5bf907b3f699770b133af709f53579b0e7ff
        // event.preventDefault();
        console.log("teste");

        // /* console.log(cpf) */
<<<<<<< HEAD
        api.get(`/promocoes`,
=======
        api.get(`/noticias`,
>>>>>>> c9dd5bf907b3f699770b133af709f53579b0e7ff
            {
                headers: {
                    'X-Parse-Application-Id': PARSE_APPLICATION_ID,
                    'X-Parse-REST-API-Key': PARSE_REST_API,
                    'X-Parse-Master-Key': MASTER_KEY,
                }
            }).then((resposta) => {
                if (resposta.status === 200) {
                    // Se a resposta for 201, a solicitação foi bem-sucedida
                    //200 pegar / 201 criar
                    //setMensagemAguarde("Enviado")
<<<<<<< HEAD
                    setConteudoPromocoes(resposta.data.results)
                    console.log("entrouuu", resposta.data.results)
=======
                    setConteudoNoticiasR(resposta.data.results)
                    console.log("entrouuu", resposta)
>>>>>>> c9dd5bf907b3f699770b133af709f53579b0e7ff
                }
            })
            .catch((erro) => {
                console.log(erro); // Trata erros de solicitação
            });
    }

    useEffect(() => {
        //executa ação
        listarBanner();
        listarOfertas();
<<<<<<< HEAD
        listarPromocoes();
=======
        listarNoticiasR();
>>>>>>> c9dd5bf907b3f699770b133af709f53579b0e7ff

    }, []);

    return (
        <main id="produtos">

            <Banner conteudo={conteudoBanner} />



            <div className="produtos_ofertas_h2 produtos_posicionamento">
                {/* <h2 class="h2_ofertas">ofertas</h2>
      <h2 class="h2_especiais">especiais</h2> */}
                <h2 />
            </div>
            <section>
                <CardOfertas conteudo={conteudoOfertas} />
            </section>

            <section className="prod_promocoes produtos_posicionamento">
                <h2>promoções</h2>
                <p>
                    as promoçoes do mês começaram!!
                    <br />
                    confira as melhores ofertas de peças do mercado feitas pelos nossos
                    parceiros
                </p>
                <div>
                    {/* <a href="#prod_slide_10">
                        <img
                            className="prod_setaPromos"
                            src={setaEsquerda}
                            alt="Icone de mover cards de ofertas para esquerda"
                        />
                    </a> */}

                    


                    <div className="carrossel">
                     
                    {
                        conteudoPromocoes.map((promocoes:any ,indice :number ) => {
                            return <div key={indice}>
                                <CardOfertasPneu
                                id={promocoes.objectId}
                                imagem={promocoes.imagem}
                                titulo={promocoes.titulo}
                                descricao={promocoes.descricao}
                                preco={promocoes.preco}
                                />
                            </div>


                        })
                    }



                {/*         <div id="prod_slide_1" className="prod_card_promo1">
                            <img src={caminhaoPromocoes} alt="imagem divulgação caminhão" />
                            <div className="prod_card_azul ">
                                <div className="prod_preco">R$5000,00</div>
                                <h3>pneu triangle 275/80R</h3>
                                <h4>caminhão</h4>
                                <span>novidade</span>
                            </div>
                        </div> */}


                       
                    </div>
                    <a href="#prod_slide_1">
                        <img
                            className="prod_setaPromos"
                            src={setaDireita}
                            alt="Icone de mover cards de ofertas para direita"
                        />
                    </a>
                </div>
            </section>
            <div className="prod_noticias_h2 produtos_posicionamento">
                <h2 />
            </div>
            <section id="CardNoticiasRecentes" >
                <section className="prod_noticias_recentes">
                    {

                        conteudoNoticiasR.map((conteudoNoticiasR: any, indice: number) => {
                            return <>
                                <CardNoticiasRecentes
                                    key={indice}
                                    titulo={conteudoNoticiasR.titulo}
                                    imagem={conteudoNoticiasR.imagem.url}
                                    descricao={conteudoNoticiasR.descricao} />
                            </>
                        })
                    }
                </section>
            </section>
        </main >
    )
}

export default Produtos;