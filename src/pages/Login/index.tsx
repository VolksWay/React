import "./style.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import imgLogin from "../../assets/images/img_login.png"

function Login() {
    return (
        <>
            <main id="login">
                {/*Tela de Login(usuario e senha)*/}
                <div id="login">
                    <form>
                        <div className="alinhamento_campos_login">
                            <label htmlFor="usuario">Usuário</label>
                            <input type="text" id="usuario" />
                        </div>
                        <div className="alinhamento_campos_login">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" />
                        </div>
                        <div>
                            <input type="checkbox" name="" id="lembre_me" />
                            <label htmlFor="">Lembre-me</label>
                        </div>
                        <a
                            className="link_nao_cadastro"
                            href="../cadastroTipoUsuario/index.html#"
                        >
                            Não possui cadastro?
                        </a>
                        <div className="alinhamento_campos_Entrar">
                            <a type="button" href="../produtos/produtosEServicos.html">
                                Entrar
                            </a>
                        </div>
                        {/*  <div class="alinhamento_texto_opcao">
              <hr>
              <hr>
          </div>
 */}
                    </form>
                    <div className="login_img_conteudo">
                        <img src={imgLogin} alt="" srcSet="" />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Login;