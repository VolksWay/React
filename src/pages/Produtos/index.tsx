import { Link } from "react-router-dom";
import "./style.css"
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import BotaoVerMais from "../../components/BotaoVerMais"; 
/* 
import imgBanner from "../../assets/img/banner_produto.png"; */
/* import setaEsquerda from "../../assets/img/ofertas-especiais-esquerda.svg"
import caminhaoOfertas from "../../assets/img/caminhao_banner_home.png"
import setaDireita from "../../assets/img/ofertas-especiais-direita.svg"
import caminhaoPromocoes from "../../assets/img/img_produto.png" */

import CardNoticiasRecentes from '../../components/CardNoticiasRecentes';






function Produtos() {
    return (
        <>
            <main id="produtos">
                <h1>Pagina Inicial Volksway</h1>
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
                                <a
                                    className="produtos_btn_banner"
                                    href="#"
                                >
                                    ver mais
                                </a>
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
                                <a
                                    className="produtos_btn_banner"
                                    href="#"
                                >
                                    ver mais
                                </a>
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
                                <a
                                    className="produtos_btn_banner"
                                    href=""
                                >
                                    ver mais
                                </a>
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
                            <a className="prod_btn_card" href="#">
                                estou interessado
                            </a>
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
                            <a className="prod_btn_card" href="#">
                                estou interessado
                            </a>
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
                            <a className="prod_btn_card" href="#">
                                estou interessado
                            </a>
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
                            <a className="prod_btn_card" href="#">
                                estou interessado
                            </a>
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
                            <a className="prod_btn_card" href="#">
                                estou interessado
                            </a>
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
                <Link to={CardNoticiasRecentes} />
            </main>


        </>
    )
}

export default Produtos;