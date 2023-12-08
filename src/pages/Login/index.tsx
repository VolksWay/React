import "./style.css"
/* import { useEffect, useState } from "react"; */
import { Link, useNavigate } from "react-router-dom";
import imgLogin from "../../assets/img/img_login.png"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import axios from "axios";
import { parseJwt, usuarioAutenticado } from "../../services/auth";

interface Usuario {
    email: string,
    senha: string,
}

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    function fazerLogin(event: any) {
        // event.preventDefault();
        event.preventDefault();

        api.post('/login', {
            email: email,
            senha: senha
        }).then((resposta: any) => {
            console.log(resposta)
            if (resposta.status === 200) {
                //setMensagemAguarde("Enviado")
                localStorage.setItem('usuario-login', resposta.data.token);
                let base64: any;
                let usuarioLogin = localStorage.getItem('usuario-login');

                if (usuarioLogin && usuarioLogin.includes('.')) {
                    base64 = usuarioLogin.split('.')[1];
                    // Restante do código
                } else {
                    console.error('A chave "usuario-login" não tem o formato esperado.');
                }
                console.log(resposta.data)
                console.log("Voce conseguiu acessar", resposta)
                console.log(usuarioAutenticado())
                console.log(parseJwt().tipoUsuario)
                switch (parseJwt().tipoUsuario) {
                    case 'MOTORISTA':
                        setTimeout(function () { window.location.href = `/produtos`; }, 1000);
                        console.log(usuarioAutenticado())
                        break;

                    case 'PROPRIETARIO':
                        setTimeout(function () { window.location.href = `/produtos`; }, 1000);
                        console.log(usuarioAutenticado())
                        break;

                    case 'ADM_FROTA':
                        setTimeout(function () { window.location.href = `/produtos`; }, 1000);
                        console.log(usuarioAutenticado())
                        break;

                    case 'ADMIN':
                       /*  setTimeout(function () { window.location.href = `/cadastro/ofertas`; }, 1000); */
                        console.log(usuarioAutenticado())
                        break;

                    /* default:
                        setTimeout(function () { window.location.href = `/produtos`; }, 1000);
                        console.log(usuarioAutenticado())
                        break; */
                }

                /* setTimeout(function () { window.location.href = `/produtos`; }, 1000); */
            }
        })
            .catch((erro: any) => {
                console.log(erro);
            });
    }



    return (
        <>
            <Header />
            <main id="login">
                {/*Tela de Login(usuario e senha)*/}
                <div id="login">
                    <form method="POST" onSubmit={fazerLogin}>
                        <div className="alinhamento_campos_login">
                            <label htmlFor="usuario">Usuário</label>
                            <input type="text" id="usuario" onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="alinhamento_campos_login">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" onChange={(event) => setSenha(event.target.value)} />
                        </div>
                        <span className="checkPrivacidade">
                            <input type="checkbox" id="" className="" />
                            "Li e estou de acordo com a"
                            <Link id="checkboxPrivacidade" to={"/privacidade"} > Política de Privacidade </Link>
                        </span>
                        <div>
                            <input type="checkbox" name="" id="lembre_me" />
                            <label htmlFor="">Lembre-me</label>
                        </div>
                        <Link to={"/cadastro/usuario"}
                            className="link_nao_cadastro"
                        >
                            Não possui cadastro?
                        </Link>
                        <div className="alinhamento_campos_Entrar">
                            {/* <Link type="button" to={"/produtos"}>
                                Entrar
                            </Link> */}
                            <button type="submit">Entrar</button>
                            <>


                            </>

                        </div>

                    </form>
                    <div className="login_img_conteudo">
                        <img src={imgLogin} alt="" srcSet="" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login;