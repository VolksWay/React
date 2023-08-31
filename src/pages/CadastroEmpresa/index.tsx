import "./style.css"
import Voltar from "../../assets/images/img_setaVoltar-semFundo.png"
import ImgCadastroVeiculo from "../../assets/images/img_cadastroEmpresa.svg"
/* import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; */

function CadastroEmpresa() {
    return (
        <main id="main_cadastro_empresa">
            <a href="../cadastroVeiculo/cadastroVeiculo.html#">
                <div className="div_voltar">
                    <img className="seta_voltar" src={Voltar} alt="" />
                    <a className="aVoltar" href="">Voltar</a>
                </div>
            </a>

            <section className="section">
                <div className="conteudo">
                    <div className="seuCadastro">
                        <p className="seu_cadastro">Cadastre a sua empresa!!</p>
                    </div>

                    <div className="seDestaca">
                        <span className="se_destaca">Preencha os dados do veículo para listarmos ofertas e notícias especiais
                        </span>
                    </div> <br />

                    <div className="inputs">
                        <div className="nome">
                            <span className="nomeInput">Nome</span> <br />
                            <input className="nome_input" type="text" />
                        </div>

                        <div className="nome">
                            <span className="nomeInput">CNPJ</span> <br />
                            <input className="nome_input" type="text" />
                        </div>

                        <div className="nome">
                            <span className="nomeInput">Cidade</span> <br />
                            <input className="nome_input" type="text" />
                        </div>
                    </div>

                    <div className="btn_proximo">
                        <a className="btnProximo" href="../cadastropessoal/index.html#">Próximo</a>
                    </div>
                </div>

                <div className="imgIlustracao">
                    <img className="ilustracao" src={ImgCadastroVeiculo} alt="" />
                </div>
            </section>

        </main>
    )
}

export default CadastroEmpresa;