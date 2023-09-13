import "./style.css"
import Lupa from "../../assets/images/lupa.png"
import Refresh from "../../assets/images/Refresh.svg"
import Play from "../../assets/images/play.png"
import Play1 from "../../assets/images/play_1.png"
import Play2 from "../../assets/images/play_2.png"
import Play3 from "../../assets/images/play_3.png"
import Logo from "../../assets/images/logo.png"

import Linhas from "../../components/LinhaCadOfertas";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CadastroOfertas() {


    return (
        <main id="main_cadastro_ofertas">
            <header>
                <div className="logo">
                    <Link to="../home/index.html">
                        <img src={Logo} alt="Logo da VolksWay" />
                    </Link>
                </div>
                <div>
                    <h1>Campanhas</h1>
                </div>
            </header>

            <section className="cad_ofertas">
                <aside></aside>
                <div className="cad_ofertas_collumn">
                    <div className="cad_ofertas_corpo">
                        <div className="cad_ofertas_pesquisa">
                            <input type="text" placeholder="Nome ou código" />
                            <Link to="">
                                <img src={Lupa} alt="" />
                            </Link>
                        </div>
                        <div className="cad_ofertas_btn">
                            <button>mais ações</button>
                            <button>excluir</button>
                            <button>novo</button>
                        </div>
                    </div>
                    <table>
                        <tbody>
                            <tr className="cad_ofertas_NomeCampos">
                                <td />
                                <td />
                                <td>Código</td>
                                <td>Nome da Propaganda</td>
                                <td>Tipo de propaganda</td>
                                <td>Posição do Banner</td>
                                <td>Usuario</td>
                                <td>Canal</td>
                                <td>Visível</td>
                            </tr>

                            <Linhas />


                        </tbody>
                    </table>
                </div>
            </section>
            <section className="cad_ofertas_AtuPaginas">
                <div className="cad_ofertas_passa_pagina">
                    <Link to="#">
                        <img src={Refresh} alt="" />
                    </Link>
                    <Link to="#">
                        <img src={Play} alt="" />
                    </Link>
                    <Link to="#">
                        <img src={Play3} alt="" />
                    </Link>
                    <Link to="">1</Link>
                    <Link to="">2</Link>
                    <Link to="">3</Link>
                    <Link to="">4</Link>
                    <Link to="">5</Link>
                    <Link to="">...</Link>
                    <Link to="#">
                        <img src={Play1} alt="" />
                    </Link>
                    <Link to="#">
                        <img src={Play2} alt="" />
                    </Link>
                </div>
                <div>
                    <p>Página 1 de 10</p>
                </div>
            </section>
        </main>

    )
}

export default CadastroOfertas;