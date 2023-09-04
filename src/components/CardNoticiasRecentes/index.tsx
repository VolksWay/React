import "./style.css"

import cardNoticias1 from "../../assets/img/card1_noticias.png"
import cardNoticias2 from "../../assets/img/card2_noticias.png"
import cardNoticias3 from "../../assets/img/card3_noticias.png"
import cardNoticias4 from "../../assets/img/card4_noticias.png"
import cardNoticias5 from "../../assets/img/card5_noticias.png"
import cardNoticias6 from "../../assets/img/card6_noticias.png"


function CardNoticiasRecentes() {
    return (
        <>

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
                            <a className="prod_btn_noticias" href="#">
                                ver mais
                            </a>
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
                            <a className="prod_btn_noticias" href="#">
                                ver mais
                            </a>
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
                            <a className="prod_btn_noticias" href="#">
                                ver mais
                            </a>
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
                                <a className="prod_btn_noticias" href="#">
                                    ver mais
                                </a>
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
                            <a className="prod_btn_noticias" href="#">
                                ver mais
                            </a>
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
                            <a className="prod_btn_noticias" href="#">
                                ver mais
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CardNoticiasRecentes;