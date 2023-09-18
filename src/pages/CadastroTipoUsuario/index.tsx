import "./style.css"
import { Link } from "react-router-dom";
import Voltar from "../../assets/img/img_setaVoltar-semFundo.png"
import Motorista from "../../assets/img/img_cadastroMotorista_semFundo.png"
import AdmFrota from "../../assets/img/img_cadastroAdmDeFrota_semFundo.png"
import Proprietario from "../../assets/img/img_cadastroProprietario_semFundo.png"
import IlustracaoPessoas from "../../assets/img/img_ilustracaoPessoasComBalao_semFundo.png"

function CadastroTipoUsuario() {
    return (
        <>
            <main id="main_cadastro_tipo_usuario">
                <a href="../home/index.html#"></a>

                {/* ///////////  componente seta voltar  */}  
                <div className="div_voltar">
                    <a href="../home/index.html#">
                        <img
                            className="seta_voltar"
                            src="../cadastroTipoUsuario/img/img_setaVoltar-semFundo.png"
                            alt=""
                        />
                    </a>
                    <a href="../home/index.html#" className="aVoltar">
                        Voltar
                    </a>
                </div>
                {/* ///////////  componente seta voltar  */}  

                <section className="section">
                    <div className="conteudo">
                        <div className="quemEVoce">
                            <p className="quem_e_voce">Quem é você?</p>
                        </div>
                        <div className="seDestaca">
                            <span className="se_destaca">
                                a Volks Way se destaca por sua plataforma de promoções e eventos
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
                            <div className="motorista">
                                <img
                                    className="img_motorista"
                                    src="../cadastroTipoUsuario/img/img_cadastroMotorista_semFundo.png"
                                    alt=""
                                />
                                <a className="a_motorista" href="">
                                    Motorista
                                </a>
                            </div>
                            <div className="adm_de_frota">
                                <img
                                    className="img_adm_de_frota"
                                    src="../cadastroTipoUsuario/img/img_cadastroAdmDeFrota_semFundo.png"
                                    alt=""
                                />
                                <a className="a_adm_de_frota" href="">
                                    Administrador de frota
                                </a>
                            </div>
                            <div className="proprietario">
                                <img
                                    className="img_proprietario"
                                    src="../cadastroTipoUsuario/img/img_cadastroProprietario_semFundo.png"
                                    alt=""
                                />
                                <a className="a_proprietario" href="">
                                    Proprietário de veículos
                                </a>
                            </div>
                        </div>
                        <div className="btn_proximo">
                            <a
                                className="btnProximo"
                                href="../cadastroVeiculo/cadastroVeiculo.html#"
                            >
                                Próximo
                            </a>
                        </div>
                    </div>
                    <div className="imgIlustracao">
                        <img
                            className="ilustracao"
                            src="../cadastroTipoUsuario/img/img_ilustracaoPessoasComBalao_semFundo.png"
                            alt=""
                        />
                    </div>
                </section>
            </main>

        </>
    )
}

export default CadastroTipoUsuario;