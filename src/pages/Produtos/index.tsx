import "./style.css"
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import BotaoVerMais from "../../components/BotaoVerMais"; 

import imgBanner from "../../assets/img/img_banner_produto.png";
import setaEsquerda from "../../assets/img/Pencil Drawing.svg"
import caminhaoOfertas from "../../assets/img/caminhao_banner_home.png"
import setaDireita from "../../assets/img/Pencil Drawing.svg"
import caminhaoPromocoes from "../../assets/img/img_produto.png"
import cardNoticias1 from "../../assets/img/card1_noticias.png"
import cardNoticias2 from "../../assets/img/card2_noticias.png"
import cardNoticias3 from "../../assets/img/card3_noticias.png"
import cardNoticias4 from "../../assets/img/card4_noticias.png"
import cardNoticias5 from "../../assets/img/card5_noticias.png"
import cardNoticias6 from "../../assets/img/card6_noticias.png"






function Produtos() {
    return (
        <main id="produtos">
            <h1>Pagina Produtos Volksway</h1>
            {/*   <section class="produtos_posicionamento">
    <div class="produtos_banner produtos_posicionamento"> */}
            <div className="slider-wrapper produtos_posicionamento ">
                <div className="slider">
                    <div className="banner1">
                        <img id="slide-1" src={imgBanner} />
                        <div className="produtos_banner_conteudo">
                            <h2>a semana de ofertas já começou!!!</h2>
                            <p>
                                compre lançamentos exclusivos para quem é do clube e desbloqueie
                                mais das coisas que voce ama.
                            </p>
                            <Link to={'/'} style={{ textDecoration: 'none' }}
                                className="produtos_btn_banner"
                            >
                                ver mais
                            </Link>
                        </div>
                    </div>
                    <div className="banner2">
                        <img id="slide-2" src={imgBanner} />
                        <div className="produtos_banner_conteudo">
                            <h2>a semana de ofertas já começou!!!</h2>
                            <p>
                                compre lançamentos exclusivos para quem é do clube e desbloqueie
                                mais das coisas que voce ama.
                            </p>
                            <Link to={'/'} style={{ textDecoration: 'none' }}
                                className="produtos_btn_banner"
                            >
                                ver mais
                            </Link>
                        </div>
                    </div>
                    <div className="banner3">
                        <img id="slide-3" src={imgBanner} />
                        <div className="produtos_banner_conteudo">
                            <h2>a semana de ofertas já começou!!!</h2>
                            <p>
                                compre lançamentos exclusivos para quem é do clube e desbloqueie
                                mais das coisas que voce ama.
                            </p>
                            <Link to={'/'} style={{ textDecoration: 'none' }}
                                className="produtos_btn_banner"
                            >
                                ver mais
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="slider-nav">
                    <a href="#slide-1" />
                    <a href="#slide-2" />
                    <a href="#slide-3" />
                </div>
            </div>
            {/*   <div class="produtos_circulos produtos_posicionamento">
          <div class="produtos_circle produtos_ativo"></div>
          <div class="produtos_circle"></div>
          <div class="produtos_circle"></div>
          <div class="produtos_circle"></div>
          <div class="produtos_circle"></div>
          <div class="produtos_circle"></div>
          <div class="produtos_circle"></div>
      </div> */}
            <div className="produtos_ofertas_h2 produtos_posicionamento">
                {/* <h2 class="h2_ofertas">ofertas</h2>
      <h2 class="h2_especiais">especiais</h2> */}
                <h2 />
            </div>
            <section className="produtos_ofertas_especiais produtos_posicionamento">
                <a href="#offer_slide_5">
                    <img
                        className="produtos_setaOfertas"
                        src={setaEsquerda}
                        alt="icone de mover cards de ofertas para esquerda"
                    />
                </a>
                <div className="carrossel">
                    <div id="offer_slide_1" className="prod_card_ofertas1">
                        <h3>constellation 2023</h3>
                        <h4>24.280 6x2 no chassis</h4>
                        <img
                            src={caminhaoOfertas}
                            alt="imagem caminhão contstellation 2023 card um"
                        />
                        <span>De R$700.000 / Por R$650.000</span>
                        <h5>Entr. 60% + 24 Parcelas</h5>
                        <Link to={'/'} style={{ textDecoration: 'none' }} className="prod_btn_card">
                            estou interessado
                        </Link>
                        <h6>oferta válida até 31/05/2023</h6>
                    </div>
                    <div id="offer_slide_2" className="prod_card_ofertas2">
                        <h3>constellation 2023</h3>
                        <h4>24.280 6x2 no chassis</h4>
                        <img
                            src={caminhaoOfertas}
                            alt="imagem caminhão contstellation 2023 card dois"
                        />
                        <span>De R$700.000 / Por R$650.000</span>
                        <h5>Entr. 60% + 24 Parcelas</h5>
                        <Link to={'/'} style={{ textDecoration: 'none' }} className="prod_btn_card">
                            estou interessado
                        </Link>
                        <h6>oferta válida até 31/05/2023</h6>
                    </div>
                    <div id="offer_slide_3" className="prod_card_ofertas3">
                        <h3>constellation 2023</h3>
                        <h4>24.280 6x2 no chassis</h4>
                        <img
                            src={caminhaoOfertas}
                            alt="imagem caminhão contstellation 2023 card tres"
                        />
                        <span>De R$700.000 / Por R$650.000</span>
                        <h5>Entr. 60% + 24 Parcelas</h5>
                        <Link to={'/'} style={{ textDecoration: 'none' }} className="prod_btn_card">
                            estou interessado
                        </Link>
                        <h6>oferta válida até 31/05/2023</h6>
                    </div>
                    <div id="offer_slide_4" className="prod_card_ofertas4">
                        <h3>constellation 2023</h3>
                        <h4>24.280 6x2 no chassis</h4>
                        <img
                            src={caminhaoOfertas}
                            alt="imagem caminhão contstellation 2023 card tres"
                        />
                        <span>De R$700.000 / Por R$650.000</span>
                        <h5>Entr. 60% + 24 Parcelas</h5>
                        <Link to={'/'} style={{ textDecoration: 'none' }} className="prod_btn_card">
                            estou interessado
                        </Link>
                        <h6>oferta válida até 31/05/2023</h6>
                    </div>
                    <div id="offer_slide_5" className="prod_card_ofertas5">
                        <h3>constellation 2023</h3>
                        <h4>24.280 6x2 no chassis</h4>
                        <img
                            src={caminhaoOfertas}
                            alt="imagem caminhão contstellation 2023 card tres"
                        />
                        <span>De R$700.000 / Por R$650.000</span>
                        <h5>Entr. 60% + 24 Parcelas</h5>
                        <Link to={'/'} style={{ textDecoration: 'none' }} className="prod_btn_card">
                            estou interessado
                        </Link>
                        <h6>oferta válida até 31/05/2023</h6>
                    </div>
                </div>
                <a href="#offer_slide_1">
                    <img
                        className="produtos_setaOfertas"
                        src={setaDireita}
                        alt="icone de mover cards de ofertas para direita"
                    />
                </a>
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
        </main>
    )
}

export default Produtos;