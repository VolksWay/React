import "./style.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CadastroOfertas() {


    return (
        <main>
            <header>
                <div className="logo">
                    <Link to="../home/index.html">
                        <img src="../home/img/logo_voksway.png" alt="Logo da VolksWay" />
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
                                <img src="./img/lupa.svg" alt="" />
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

                        </tbody>
                    </table>
                </div>
            </section>
            <section className="cad_ofertas_AtuPaginas">
                <div className="cad_ofertas_passa_pagina">
                    <Link to="#">
                        <img src="./img/Refresh.svg" alt="" />
                    </Link>
                    <Link to="#">
                        <img src="./img/play.png" alt="" />
                    </Link>
                    <Link to="#">
                        <img src="./img/play_3.png" alt="" />
                    </Link>
                    <Link to="">1</Link>
                    <Link to="">2</Link>
                    <Link to="">3</Link>
                    <Link to="">4</Link>
                    <Link to="">5</Link>
                    <Link to="">...</Link>
                    <Link to="#">
                        <img src="./img/play_1.png" alt="" />
                    </Link>
                    <Link to="#">
                        <img src="./img/play_2.png" alt="" />
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