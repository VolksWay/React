import "./style.css"
import { Link } from "react-router-dom";
import Voltar from "../../assets/img/img_setaVoltar-semFundo.png"
import Motorista from "../../assets/img/img_cadastroMotorista_semFundo.png"
import AdmFrota from "../../assets/img/img_cadastroAdmDeFrota_semFundo.png"
import Proprietario from "../../assets/img/img_cadastroProprietario_semFundo.png"
import IlustracaoPessoas from "../../assets/img/img_ilustracaoPessoasComBalao_semFundo.png"
import { useState } from "react";

function CadastroTipoUsuario() {
    const [tipoUsuario, setTipousuario] = useState<string>("");

    return (
        <main id="main_cadastro_tipo_usuario">
            <Link to={"/"}></Link>
            <div className="div_voltar">
                <Link to={"/"}>
                    <img
                        className="seta_voltar"
                        src={Voltar}
                        alt=""
                    />
                </Link>
                <Link to={"/"} className="aVoltar">
                    Voltar
                </Link>
            </div>
            <section className="section">
                <div className="conteudo">
                    <div className="quemEVoce">
                        <p className="quem_e_voce">Quem é você?</p>
                    </div>
                    <div className="seDestaca">
                        <span className="se_destaca">
                            A Volks Way se destaca por sua plataforma de promoções e eventos
                            exclusivos para motoristas, administradores de frota e proprietários
                            de caminhões. Nossa plataforma permite que esses profissionais
                            participem de eventos, concursos e promoções exclusivas, além de
                            receberem informações relevantes sobre o setor de transportes.
                        </span>
                    </div>
                    <div className="perguntaOpcao">
                        <p className="pergunta_opcao">
                            Qual das opções abaixo melhor descreve a sua situação?
                        </p>
                    </div>
                    <div className="tres_opcoes">
                        <div onClick={() => setTipousuario("Motorista")} className="motorista">
                            <img
                                className="img_motorista"
                                src={Motorista}
                                alt=""
                            />
                            <span className="a_motorista">
                                Motorista
                            </span>
                        </div>
                        <div onClick={() => setTipousuario("AdmFrota")} className="adm_de_frota">
                            <img
                                className="img_adm_de_frota"
                                src={AdmFrota}
                                alt=""
                            />
                            <span className="a_adm_de_frota">
                                Administrador de frota
                            </span>
                        </div>
                        <div onClick={() => setTipousuario("Proprietario")} className="proprietario">
                            <img
                                className="img_proprietario"
                                src={Proprietario}
                                alt=""
                            />
                            <span className="a_proprietario">
                                Proprietário de veículos
                            </span>
                        </div>
                    </div>
                    <div className="btn_proximo">
                        <Link
                            className="btnProximo"
                            to={`/cadastro/veiculo?tipoUsuario=${tipoUsuario}`}>
                            Próximo
                        </Link>
                    </div>
                </div>
                <div className="imgIlustracao">
                    <img
                        className="ilustracao"
                        src={IlustracaoPessoas}
                        alt=""
                    />
                </div>
            </section>
        </main>
    )
}

export default CadastroTipoUsuario;