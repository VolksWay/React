import "./style.css"
import Lupa from "../../assets/img/lupa.png"
import PencilDraw from "../../assets/img/Pencil Drawing.svg"
import Visivel from "../../assets/img/visivel.svg"
import Invisivel from "../../assets/img/invisivel.svg"
import Refresh from "../../assets/img/Refresh.svg"
import Play from "../../assets/img/play.png"
import Play1 from "../../assets/img/play_1.png"
import Play2 from "../../assets/img/play_2.png"
import Play3 from "../../assets/img/play_3.png"
/* import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; */

function CadastroOfertas() {
    return (
        <main id="main_cadastro_ofertas">
            <section className="cad_ofertas">
                <aside>

                </aside>
                <div className="cad_ofertas_collumn">
                    <div className="cad_ofertas_corpo">
                        <div className="cad_ofertas_pesquisa">
                            <input type="text" placeholder="Nome ou código" />
                            <a href=""><img src={Lupa} alt="" /></a>
                        </div>
                        <div className="cad_ofertas_btn">
                            <button>mais ações</button>
                            <button>excluir</button>
                            <button>novo</button>

                        </div>
                    </div>
                    <table>
                        <tr className="cad_ofertas_NomeCampos">
                            <td></td>
                            <td></td>
                            <td>Código</td>
                            <td>Nome da Propaganda</td>
                            <td>Tipo de propaganda</td>
                            <td>Posição do Banner</td>
                            <td>Usuario</td>
                            <td>Canal</td>
                            <td>Visível</td>
                        </tr>

                        <tr className="cad_ofertas_campos linha">
                            <td><input type="checkbox" /></td>
                            <td><a href="#"><img src={PencilDraw} alt="" /></a></td>
                            <td>001</td>
                            <td>2 por 1 Pneus</td>
                            <td>Relampago</td>
                            <td>Banner Menu</td>
                            <td>Todos</td>
                            <td>Todos os canais</td>
                            <td><img src={Invisivel} alt="" /></td>
                        </tr>
                        <tr className="cad_ofertas_campos">
                            <td><input type="checkbox" /></td>
                            <td><a href="#"><img src={PencilDraw} alt="" /></a></td>
                            <td>002</td>
                            <td>Frete gratis </td>
                            <td>Cupom</td>
                            <td>Banner Menu</td>
                            <td>Clientes volks</td>
                            <td>Todos os canais</td>
                            <td><img src={Visivel} alt="" /></td>
                        </tr>
                        <tr className="cad_ofertas_campos">
                            <td><input type="checkbox" /></td>
                            <td><a href="#"><img src={PencilDraw} alt="" /></a></td>
                            <td>003</td>
                            <td>2 por 1 Pneus</td>
                            <td>Relampago</td>
                            <td>Banner Menu</td>
                            <td>Todos</td>
                            <td>Todos os canais</td>
                            <td><img src={Visivel} alt="" /></td>
                        </tr>
                        <tr className="cad_ofertas_campos">
                            <td><input type="checkbox" /></td>
                            <td><a href="#"><img src={PencilDraw} alt="" /></a></td>
                            <td>057</td>
                            <td>Frete gratis </td>
                            <td>Cupom</td>
                            <td>Banner Menu</td>
                            <td>Clientes volks</td>
                            <td>Todos os canais</td>
                            <td><img src={Visivel} alt="" /></td>
                        </tr>
                        <tr className="cad_ofertas_campos">
                            <td><input type="checkbox" /></td>
                            <td><a href="#"><img src={PencilDraw} alt="" /></a></td>
                            <td>023</td>
                            <td>2 por 1 Pneus</td>
                            <td>Relampago</td>
                            <td>Banner Menu</td>
                            <td>Todos</td>
                            <td>Todos os canais</td>
                            <td><img src={Invisivel} alt="" /></td>
                        </tr>
                        <tr className="cad_ofertas_campos">
                            <td><input type="checkbox" /></td>
                            <td><a href="#"><img src={PencilDraw} alt="" /></a></td>
                            <td>011</td>
                            <td>Frete gratis </td>
                            <td>Cupom</td>
                            <td>Banner Menu</td>
                            <td>Clientes volks</td>
                            <td>Todos os canais</td>
                            <td><img src={Invisivel} alt="" /></td>
                        </tr>
                        <tr className="cad_ofertas_campos">
                            <td><input type="checkbox" /></td>
                            <td><a href="#"><img src={PencilDraw} alt="" /></a></td>
                            <td>009</td>
                            <td>2 por 1 Pneus</td>
                            <td>Relampago</td>
                            <td>Banner Menu</td>
                            <td>Todos</td>
                            <td>Todos os canais</td>
                            <td><img src={Visivel} alt="" /></td>
                        </tr>
                        <tr className="cad_ofertas_campos">
                            <td><input type="checkbox" /></td>
                            <td><a href="#"><img src={PencilDraw} alt="" /></a></td>
                            <td>015</td>
                            <td>Frete gratis </td>
                            <td>Cupom</td>
                            <td>Banner Menu</td>
                            <td>Clientes volks</td>
                            <td>Todos os canais</td>
                            <td><img src={Visivel} alt="" /></td>
                        </tr>
                        <tr className="cad_ofertas_campos">
                            <td><input type="checkbox" /></td>
                            <td><a href="#"><img src={PencilDraw} alt="" /></a></td>
                            <td>009</td>
                            <td>2 por 1 Pneus</td>
                            <td>Relampago</td>
                            <td>Banner Menu</td>
                            <td>Todos</td>
                            <td>Todos os canais</td>
                            <td><img src={Invisivel} alt="" /></td>
                        </tr>
                        <tr className="cad_ofertas_campos">
                            <td><input type="checkbox" /></td>
                            <td><a href="#"><img src={PencilDraw} alt="" /></a></td>
                            <td>015</td>
                            <td>Frete gratis </td>
                            <td>Cupom</td>
                            <td>Banner Menu</td>
                            <td>Clientes volks</td>
                            <td>Todos os canais</td>
                            <td><img src={Visivel} alt="" /></td>
                        </tr>
                        <tr className="cad_ofertas_campos">
                            <td><input type="checkbox" /></td>
                            <td><a href="#"><img src={PencilDraw} alt="" /></a></td>
                            <td>009</td>
                            <td>2 por 1 Pneus</td>
                            <td>Relampago</td>
                            <td>Banner Menu</td>
                            <td>Todos</td>
                            <td>Todos os canais</td>
                            <td><img src={Invisivel} alt="" /></td>
                        </tr>
                    </table>
                    <div>
                        <div className="cad_ofertas_bluer">
                            <div className="cad_ofertas_input">
                                <div className="cad_ofertas_inpcad">
                                    <span>Cadastro de Campanha</span>
                                    <form>
                                        <div className="p1">
                                            <div className="coluna">
                                                <label htmlFor="">Código</label>
                                                <input type="number" />
                                            </div>
                                            <div className="coluna">
                                                <label htmlFor="">Nome da Propaganda</label>
                                                <input type="text" />
                                            </div>
                                            <div className="coluna">
                                                <label htmlFor="">Tipo de Propaganda</label>
                                                <input type="text" />
                                            </div>
                                        </div>

                                        <div className="p1_none">
                                            <div className="coluna">
                                                <label htmlFor="">Tipo de Propaganda</label>
                                                <input type="text" />
                                            </div>
                                            <div className="coluna">
                                                <label htmlFor="">Canal</label>
                                                <select name="canal" required>
                                                    <option value="canais">Todos os canais</option>
                                                    <option value="Site">Site</option>
                                                    <option value="Mobile">Mobile</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="p1">
                                            <div className="coluna">
                                                <label htmlFor="">Posição do Banner</label>
                                                <select name="plataforma" required>
                                                    <option value="BannerMenu">Banner Menu</option>
                                                    <option value="BannerHome">Banner Home</option>
                                                    <option value="Categorias">Categorias</option>
                                                    <option value="Acessorios">Acessorios</option>
                                                    <option value="Ofertas">Ofertas</option>
                                                    <option value="Acessorios">Acessorios</option>
                                                </select>
                                            </div>
                                            <div className="coluna">
                                                <label htmlFor="">Usuario</label>
                                                <select name="usuarios" required>
                                                    <option value="motorista">Motorista</option>
                                                    <option value="admFrota">Adm Frota</option>
                                                    <option value="propietario">Propietario</option>
                                                    <option value="todos">Todos</option>
                                                </select>
                                            </div>
                                            <div className="coluna">
                                                <label htmlFor="">Canal</label>
                                                <select name="canal" required>
                                                    <option value="canais">Todos os canais</option>
                                                    <option value="Site">Site</option>
                                                    <option value="Mobile">Mobile</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="p1">
                                            <div className="coluna">
                                                <label >Selecione o Banner </label>
                                                <input className="arq" type="file" />
                                            </div>
                                            <div className="coluna inp">
                                                <label htmlFor="">Descrição do Banner</label>
                                                <input type="text-area" />
                                            </div>
                                        </div>
                                        <div className="p1 ">
                                            <div className="coluna data">
                                                <label>Data inicial </label>
                                                <input type="date" />
                                            </div>
                                            <div className="coluna data">
                                                <label htmlFor="">Data Final</label>
                                                <input type="date" />
                                            </div>
                                        </div>
                                    </form>
                                    <div className="btns p1">
                                        <button type="submit">Salvar</button>
                                        <button>Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cad_ofertas_AtuPaginas">

                <div className="cad_ofertas_passa_pagina">
                    <a href="#"><img src={Refresh} alt="" /></a>
                    <a href="#"><img src={Play} alt="" /></a>
                    <a href="#"><img src={Play3} alt="" /></a>
                    <a href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">4</a>
                    <a href="">5</a>
                    <a href="">...</a>
                    <a href="#"><img src={Play1} alt="" /></a>
                    <a href="#"><img src={Play2} alt="" /></a>
                </div>
                <div>
                    <p>Página 1 de 10</p>
                </div>
            </section>

        </main >
    )
}

export default CadastroOfertas;