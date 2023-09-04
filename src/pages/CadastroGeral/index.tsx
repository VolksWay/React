import "./style.css"
<<<<<<< HEAD
/* import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; */
import Voltar from "../../assets/images/img_setaVoltar-semFundo.png"
import ImgCadastroGeral from "../../assets/images/cadastro_pessoal.svg"
=======
import Voltar from "../../assets/img/img_setaVoltar-semFundo.png"
import ImgCadastroGeral from "../../assets/img/cadastro_pessoal.svg"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    nome: z.string().min(4, "Por favor, digite seu nome completo"),
    telefone: z.string().min(4, "Por favor, digite um telefone válido"),
    /*  dataNascimento: z.date(), */
    email: z.string().min(6, "Por favor, digite um email válido").max(25).email({
        message: "Por favor, digite um email válido",
    }),
    cpf: z.string().min(14, "Por favor, informe um CPF válido"),
    senha: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
    confirmarSenha: z.string()
})

type FormProps = z.infer<typeof schema>
>>>>>>> develop

function CadastroGeral() {
    const [email, setEmail] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [cpf, setCPF] = useState<string>("");
    const { handleSubmit, register, watch, formState: { errors } } = useForm<FormProps>({
        mode: "all",
        reValidateMode: 'onChange',
        criteriaMode: 'all',
        /*   dataNascimento: new Date(), */
        resolver: zodResolver(schema),
        defaultValues: {
            nome: "",
            telefone: "",
            email: "",
            cpf: "",
            senha: "",
            confirmarSenha: ""
        }
    });

    const handleForm = (data: FormProps) => {
        console.log({ data })
    }

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
        value = value.replace(/\D/g, "")
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
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
                <form action="" onSubmit={handleSubmit(handleForm)}>
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
                                <p className="erro_input">{errors.nome?.message}</p>
                            </div>

                            <div className="nome">
                                <label className="nomeInput">CPF</label> <br />
                                <input onChange={(event) => { setCPF(event.target.value); handleCPF(event) }} maxLength={14} className="nome_input" type="text" />
                                <p className="erro_input">{errors.cpf?.message}</p>
                            </div>

                            <div className="nome">
                                <label className="nomeInput">Telefone</label> <br />
                                <input onChange={(event) => { setTelefone(event.target.value); handlePhone(event) }} type="tel" maxLength={15} className="nome_input" />
                                <p className="erro_input">{errors.telefone?.message}</p>
                            </div>

                            <div className="nome">
                                <label className="nomeInput">Data de nascimento</label> <br />
                                <input className="nome_input" type="date" />
                                {/*  <p className="erro_input">{errors.senha?.message}</p> */}
                            </div>

                            <div className="nome">
                                <label className="nomeInput">Email</label> <br />
                                <input onChange={(event) => setEmail(event.target.value)} type="text" minLength={6} className="nome_input" />
                                <p className="erro_input">{errors.senha?.message}</p>
                            </div>

                            <div className="nome">
                                <label className="nomeInput">Senha</label> <br />
                                <input
                                    {...register("senha")}
                                    className="nome_input"
                                    type="password"
                                />
                                <p className="erro_input">{errors.senha?.message}</p>
                            </div>

                            <div className="nome">
                                <label className="nomeInput">Confirmar senha</label> <br />
                                <input className="nome_input" type="text" />
                                <p className="erro_input">{errors.confirmarSenha?.message}</p>
                            </div>


                        </div>

                        <div className="btn_proximo "><button className="btnProximo habilitado">cadastrar</button></div>
                        {/*  {(validarEmail(email) === true) && validarCPF(cpf) === true && telefone.length === 15 && <div className="btn_proximo habilitado"><Link className="btnProximo" to={"/login"}>cadastrar</Link></div>}

                        {(validarEmail(email) === false || validarCPF(cpf) === false || telefone.length < 15) && <div className="btn_proximo desabilitado"><a className="btnProximo">cadastrar</a></div>} */}
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