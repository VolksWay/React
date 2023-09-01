import "./style.css"
import Voltar from "../../assets/img/img_setaVoltar-semFundo.png"
import ImgCadastroGeral from "../../assets/img/cadastro_pessoal.svg"
import { Link } from "react-router-dom";
import { useState } from "react";

function CadastroGeral() {
    const [email, setEmail] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [cpf, setCPF] = useState<string>("");

    function validarEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handlePhone = (event: any) => {
        let input = event.target
        input.value = phoneMask(input.value)
    }
    
    const handleCPF = (event: any) => {
        let input = event.target
        input.value = cpfMask(input.value)
    }

    const phoneMask = (value: any) => {
        if (!value) return ""
        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{2})(\d)/, "($1) $2")
        value = value.replace(/(\d)(\d{4})$/, "$1-$2")
        return value
    }

    function cpfMask(value: any) {
        if (!value) return ""
        value = value.replace(/\D/g,"")
        value = value.replace(/(\d{3})(\d)/,"$1.$2")
        value = value.replace(/(\d{3})(\d)/,"$1.$2")
        value = value.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        return value
    }

    function validarCPF(cpf: any) {
        return /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(cpf);
    }

    return (
        <main id="main_cadastro_geral">
            <Link to={"/cadastro/empresa"} className="voltar">
                <div className="div_voltar">
                    <img className="seta_voltar" src={Voltar} alt="" />
                    <span className="spanVoltar">Voltar</span>
                </div>
            </Link>

            <section className="section">
                <form action="">
                    <div className="conteudo">
                        <div className="seuCadastro">
                            <p className="seu_cadastro">Seu cadastro está quase pronto!</p>
                        </div>

                        <div className="seDestaca">
                            <span className="se_destaca">Falta preencher os dados pessoais abaixo para finalizar </span>
                        </div> <br />


                        <div className="inputs">

                            <div className="nome">
                                <label className="nomeInput">Nome</label> <br />
                                <input className="nome_input" type="text" />
                            </div>

                            <div className="nome">
                                <label className="nomeInput">CPF</label> <br />
                                <input onChange={(event) => { setCPF(event.target.value); handleCPF(event) }} maxLength={14} className="nome_input" type="text" />
                            </div>

                            <div className="nome">
                                <label className="nomeInput">Telefone</label> <br />
                                <input onChange={(event) => { setTelefone(event.target.value); handlePhone(event) }} type="tel" maxLength={15} className="nome_input" />
                            </div>
                            <div className="nome">
                                <label className="nomeInput">Data de nascimento</label> <br />
                                <input className="nome_input" type="date" />
                            </div>

                            <div className="nome">
                                <label className="nomeInput">Email</label> <br />
                                <input onChange={(event) => setEmail(event.target.value)} type="text" minLength={6} className="nome_input" />
                            </div>

                            <div className="nome">
                                <span className="nomeInput">Senha</span> <br />
                                <input className="nome_input" type="text" />
                            </div>


                        </div>

                        {(validarEmail(email) === true) && validarCPF(cpf) === true && telefone.length === 15 && <div className="btn_proximo habilitado"><Link className="btnProximo" to={"/login"}>cadastrar</Link></div>}

                        {(validarEmail(email) === false || validarCPF(cpf) === false || telefone.length < 15) && <div className="btn_proximo desabilitado"><a className="btnProximo">cadastrar</a></div>}
                    </div>
                </form>

                <div className="imgIlustracao">
                    <img className="ilustracao" src={ImgCadastroGeral} alt="" />
                </div>
            </section>

        </main>
    )
}

export default CadastroGeral;