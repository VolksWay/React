import "./style.css"
import Voltar from "../../assets/img/arrow-left-solid 1.png"
import FundoVeiculo from "../../assets/img/Group 2452.png"
 import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

function CadastroVeiculo() {
    return (
        <main id="main_cadastro_veiculo">
            <section className="cadastroVeiculo">
                <div className="conteudo_cadVeiculo">
                    <a href="../cadastroTipoUsuario/index.html#"></a>
                    <div className="div_voltar">
                        <a href="../cadastroTipoUsuario/index.html#">
                            <img
                                className="seta_voltar"
                                src={Voltar}
                                alt=""
                            />
                        </a>
                        <a className="spanVoltar">Voltar</a>
                    </div>
                    <div className="chamada">
                        <h1> Cadastre o seu veículo!</h1>
                        <p className="cad_texto">
                            Preencha os dados do veículo para conseguir checar a segurança dele
                        </p>
                    </div>
                    <div className="formulario_CadVeiculo">
                        <div>
                            <p>Código do Chassi</p>
                            <input className="cadVeiculo1" />
                        </div>
                        <div>
                            <p>Placa</p>
                            <input className="cadVeiculo1" />
                        </div>
                        <div>
                            <p>Marca</p>
                            <input className="cadVeiculo1" />
                        </div>
                        <a href="../cadastroEmpresa/index.html#">
                            <button className="cadVeiculo2">Próximo</button>
                        </a>
                    </div>
                </div>
                <img className="fundo" src={FundoVeiculo} alt="" />
            </section>
        </main>
    )
}

export default CadastroVeiculo;