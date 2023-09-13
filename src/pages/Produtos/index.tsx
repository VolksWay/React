import "./style.css"
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import BotaoVerMais from "../../components/BotaoVerMais"; 

// import imgBanner from "../../assets/img/banner_produto.png";
// import setaEsquerda from "../../assets/img/ofertas-especiais-esquerda.svg"
// import caminhaoOfertas from "../../assets/img/caminhao_banner_home.png"
// import setaDireita from "../../assets/img/ofertas-especiais-direita.svg"
// import caminhaoPromocoes from "../../assets/img/img_produto.png"
// import cardNoticias1 from "../../assets/img/card1_noticias.png"
// import cardNoticias2 from "../../assets/img/card2_noticias.png"
// import cardNoticias3 from "../../assets/img/card3_noticias.png"
// import cardNoticias4 from "../../assets/img/card4_noticias.png"
// import cardNoticias5 from "../../assets/img/card5_noticias.png"
// import cardNoticias6 from "../../assets/img/card6_noticias.png"

import axios from "axios";
import Parse from 'parse/dist/parse.min.js';
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import CardOfertas from "../../components/CardOfertas";
const PARSE_APPLICATION_ID = '1QJ5n2ix95flGl0Rt7b1l4CfbqXuYQcj7VU0oKGd';
const PARSE_JAVASCRIPT_KEY = 'R3yYjaaJbXJNHSCT6NqVjxXZBqZjllwQzTuGUyvi';
const PARSE_REST_API = 'aTuaHYnGDCCvEXeN4j3eyLfGxBbNnqH7zL5UAfxA';
const MASTER_KEY = "F4vFzZm6HASmvFNv9TihqyVvEIPJhxs5uXY9Sebu"
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

function Produtos() {
    const [conteudoBanner, setConteudoBanner] = useState<any[]>([]);
    const [conteudoOfertas, setConteudoOfertas] = useState<any[]>([]);

    function listarBanner() {
        // event.preventDefault();
        console.log("teste");

        // /* console.log(cpf) */
        axios.get(`https://parseapi.back4app.com/parse/classes/banner`,
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
        axios.get(`https://parseapi.back4app.com/parse/classes/ofertas`,
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

    useEffect(() => {
        //executa ação
        listarBanner();
        listarOfertas();

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
                    <a href="#prod_slide_10">
                        <img
                            className="prod_setaPromos"
                            src={setaEsquerda}
                            alt="Icone de mover cards de ofertas para esquerda"
                        />
                    </a>
                    <div className="carrossel">
                        <div id="prod_slide_1" className="prod_card_promo1">
                            <img src={caminhaoPromocoes} alt="imagem divulgação caminhão" />
                            <div className="prod_card_azul ">
                                <div className="prod_preco">R$5000,00</div>
                                <h3>pneu triangle 275/80R</h3>
                                <h4>caminhão</h4>
                                <span>novidade</span>
                            </div>
                        </div>
                        <div id="prod_slide_2" className="prod_card_promo2">
                            <img src={caminhaoPromocoes} alt="imagem divulgação caminhão" />
                            <div className="prod_card_azul">
                                <div className="prod_preco">R$5000,00</div>
                                <h3>pneu triangle 275/80R</h3>
                                <h4>caminhão</h4>
                                <span>novidade</span>
                            </div>
                        </div>
                        <div id="prod_slide_3" className="prod_card_promo3">
                            <img src={caminhaoPromocoes} alt="imagem divulgação caminhão" />
                            <div className="prod_card_azul">
                                <div className="prod_preco">R$5000,00</div>
                                <h3>pneu triangle 275/80R</h3>
                                <h4>caminhão</h4>
                                <span>novidade</span>
                            </div>
                        </div>
                        <div id="prod_slide_4" className="prod_card_promo4">
                            <img src={caminhaoPromocoes} alt="imagem divulgação caminhão" />
                            <div className="prod_card_azul">
                                <div className="prod_preco">R$5000,00</div>
                                <h3>pneu triangle 275/80R</h3>
                                <h4>caminhão</h4>
                                <span>novidade</span>
                            </div>
                        </div>
                        <div id="prod_slide_5" className="prod_card_promo5">
                            <img src={caminhaoPromocoes} alt="imagem divulgação caminhão" />
                            <div className="prod_card_azul">
                                <div className="prod_preco">R$5000,00</div>
                                <h3>pneu triangle 275/80R</h3>
                                <h4>caminhão</h4>
                                <span>novidade</span>
                            </div>
                        </div>
                        <div id="prod_slide_6" className="prod_card_promo6">
                            <img src={caminhaoPromocoes} alt="imagem divulgação caminhão" />
                            <div className="prod_card_azul">
                                <div className="prod_preco">R$5000,00</div>
                                <h3>pneu triangle 275/80R</h3>
                                <h4>caminhão</h4>
                                <span>novidade</span>
                            </div>
                        </div>
                        <div id="prod_slide_7" className="prod_card_promo7">
                            <img src={caminhaoPromocoes} alt="imagem divulgação caminhão" />
                            <div className="prod_card_azul">
                                <div className="prod_preco">R$5000,00</div>
                                <h3>pneu triangle 275/80R</h3>
                                <h4>caminhão</h4>
                                <span>novidade</span>
                            </div>
                        </div>
                        <div id="prod_slide_8" className="prod_card_promo8">
                            <img src={caminhaoPromocoes} alt="imagem divulgação caminhão" />
                            <div className="prod_card_azul">
                                <div className="prod_preco">R$5000,00</div>
                                <h3>pneu triangle 275/80R</h3>
                                <h4>caminhão</h4>
                                <span>novidade</span>
                            </div>
                        </div>
                        <div id="prod_slide_9" className="prod_card_promo9">
                            <img src={caminhaoPromocoes} alt="imagem divulgação caminhão" />
                            <div className="prod_card_azul">
                                <div className="prod_preco">R$5000,00</div>
                                <h3>pneu triangle 275/80R</h3>
                                <h4>caminhão</h4>
                                <span>novidade</span>
                            </div>
                        </div>
                        <div id="prod_slide_10" className="prod_card_promo10">
                            <img src={caminhaoPromocoes} alt="imagem divulgação caminhão" />
                            <div className="prod_card_azul">
                                <div className="prod_preco">R$5000,00</div>
                                <h3>pneu triangle 275/80R</h3>
                                <h4>caminhão</h4>
                                <span>novidade</span>
                            </div>
                        </div>
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
            <section className="prod_noticias_recentes">
                <div className="prod_card_noticias">
                    <img src={cardNoticias1} alt="" />
                    <div className="prod_card_branco">
                        <div className="prod_paragrafo">
                            <h3> Navistar junto a Volkswagen</h3>
                            <p>
                                A Volkswagen Caminhões e Ônibus anunciou recentemente a criação de
                                uma parceria estratégica com a empresa norte-americana Navistar para
                                expandir suas operações na América do Norte. O acordo prevê a
                                criação de uma nova empresa que produzirá caminhões pesados com
                                tecnologia avançada e com foco em veículos elétricos.
                            </p>
                        </div>
                        <div>
                            <Link to={'/'} style={{ textDecoration: 'none' }} className="prod_btn_noticias">
                                ver mais
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="prod_card_noticias">
                    <img src={cardNoticias2} alt="" />
                    <div className="prod_card_branco">
                        <div className="prod_paragrafo">
                            <h3> Lançamento do e-Delivery </h3>
                            <p>
                                A Volkswagen Caminhões e Ônibus anunciou recentemente o lançamento
                                de uma nova linha de caminhões leves, médios e pesados ​​que
                                oferecem maior eficiência de combustível e menor impacto ambiental.
                                Os novos modelos, chamados de "Delivery", foram projetados
                                especificamente para atender às demandas do mercado de entrega
                                urbana, que está crescendo rapidamente em todo o mundo.
                            </p>
                        </div>
                        <div>
                            <Link to={'/'} style={{ textDecoration: 'none' }} className="prod_btn_noticias">
                                ver mais
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="prod_card_noticias">
                    <img src={cardNoticias3} alt="" />
                    <div className="prod_card_branco">
                        <div className="prod_paragrafo">
                            <h3> Parceria Volkswagen e Siemens</h3>
                            <p>
                                A Volkswagen Caminhões e Ônibus anunciou recentemente uma parceria
                                com a Siemens para desenvolver uma solução de eletrificação para
                                caminhões híbridos. O objetivo é criar um sistema de tração elétrica
                                para caminhões pesados, que reduza as emissões de CO2 e melhore a
                                eficiência energética.
                            </p>
                        </div>
                        <div>
                            <Link to={'/'} style={{ textDecoration: 'none' }} className="prod_btn_noticias">
                                ver mais
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="prod_noticias_recentes2">
                <div className="prod_card_noticias">
                    <img src={cardNoticias4} alt="" />
                    <div className="prod_card_branco">
                        <div className="prod_paragrafo">
                            <h3>Caminhões com gás natural (GNL)</h3>
                            <p>
                                A Volkswagen Caminhões e Ônibus anunciou recentemente o lançamento
                                de uma nova linha de caminhões movidos a gás natural liquefeito
                                (GNL), como parte de sua estratégia de oferecer opções mais
                                sustentáveis para seus clientes. A nova linha, chamada de
                                "Constellation GNL", apresenta oferece benefícios significativos em
                                termos de redução de emissões e eficiência energética.
                            </p>
                        </div>
                        <div>
                            <div>
                                <Link to={'/'} style={{ textDecoration: 'none' }} className="prod_btn_noticias">
                                    ver mais
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prod_card_noticias">
                    <img src={cardNoticias5} alt="" />
                    <div className="prod_card_branco">
                        <div className="prod_paragrafo">
                            <h3> Lançamento do Kenworth K270E</h3>
                            <p>
                                A fabricante de caminhões americana Kenworth anunciou recentemente o
                                lançamento de seu novo caminhão elétrico, o Kenworth K270E. O
                                veículo é projetado para entregas urbanas e tem uma autonomia de até
                                100 milhas (cerca de 160 km) com uma única carga. O veículo possui
                                tecnologia regenerativa de freio, que ajuda a recarregar as baterias
                                enquanto o motorista está freando.
                            </p>
                        </div>
                        <div>
                            <Link to={'/'} style={{ textDecoration: 'none' }} className="prod_btn_noticias">
                                ver mais
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="prod_card_noticias">
                    <img src={cardNoticias6} alt="" />
                    <div className="prod_card_branco">
                        <div className="prod_paragrafo">
                            <h3> Lançamento do Freightliner</h3>
                            <p>
                                A Daimler Trucks, uma das maiores fabricantes de caminhões do mundo,
                                anunciou recentemente que está expandindo sua linha de caminhões
                                elétricos com o lançamento do Freightliner eCascadia. O veículo é
                                projetado para entregas de longa distância e tem uma autonomia de
                                até 250 milhas (cerca de 400 km) com uma única carga.
                            </p>
                        </div>
                        <div>
                            <Link to={'/'} style={{ textDecoration: 'none' }} className="prod_btn_noticias">
                                ver mais
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Produtos;