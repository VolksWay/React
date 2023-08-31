import "./style.css"
import Voltar from "../../assets/img/img_setaVoltar-semFundo.png"
import ImgCadastroGeral from "../../assets/img/cadastro_pessoal.svg"
import { Link } from "react-router-dom";

function CadastroGeral() {
    return (
        <main id="main_cadastro_geral">
            <Link to={"cadastro/empresa"} className="voltar">
                <div className="div_voltar">
                    <img className="seta_voltar" src={Voltar} alt="" />
                    <span className="spanVoltar">Voltar</span>
                </div>
            </Link>

            <section className="section">
                <div className="conteudo">
                    <div className="seuCadastro">
                        <p className="seu_cadastro">Seu cadastro está quase pronto!</p>
                    </div>

                    <div className="seDestaca">
                        <span className="se_destaca">Falta preencher os dados pessoais abaixo para finalizar </span>
                    </div> <br />


                    <div className="inputs">

                        <div className="nome">
                            <span className="nomeInput">Nome</span> <br />
                            <input className="nome_input" type="text" />
                        </div>

                        <div className="nome">
                            <span className="nomeInput">CPF</span> <br />
                            <input className="nome_input" type="text" />
                        </div>

                        <div className="nome">
                            <span className="nomeInput">Telefone</span> <br />
                            <input className="nome_input" type="text" />
                        </div>
                        <div className="nome">
                            <span className="nomeInput">Data de nascimento</span> <br />
                            <input className="nome_input" type="text" />
                        </div>

                        <div className="nome">
                            <span className="nomeInput">Email</span> <br />
                            <input className="nome_input" type="text" />
                        </div>

                        <div className="nome">
                            <span className="nomeInput">Senha</span> <br />
                            <input className="nome_input" type="text" />
                        </div>


                    </div>

                    <div className="btn_proximo">
                        <Link className="btnProximo" to={"/login"}>cadastrar</Link>
                    </div>
                </div>

                <div className="imgIlustracao">
                    <img className="ilustracao" src={ImgCadastroGeral} alt="" />
                </div>
            </section>

        </main>
    )
}

export default CadastroGeral;