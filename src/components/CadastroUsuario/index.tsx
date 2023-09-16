// roots
import { Checkbox } from "@mui/material";
import "./style.css";


function CadastroUsuario() {
    return (
        <>
<section className="cadastroUsuario">
  <div className="conteudo_cadUsuario">
    <a href="../cadastroTipoUsuario/index.html#"></a>
    <div className="div_voltar">
      <a href="../cadastroTipoUsuario/index.html#">
        <img className="seta_voltar"
          src="./img/arrow-left-solid 1.png"
                  alt="" />
      </a>
      <a className="spanVoltar">Voltar</a>
      </div>
    <div className="chamada">
         <h1> Cadastro do Usuario!</h1>
            <p className="cad_texto">
        Preencha seus dados abaixo!!!
      </p>
    </div>
    <div className="formulario_CadUsuario">
      <div className="Codigo do Usuário">
       <p>Código do Usuário</p>
        <input className="cadUsuuario" />
      </div>
      <div>
        <div className="Login">
            </div>
        <p>Login</p>
        <input className="cadLogin1" />
      </div>
      <div className="Acesso">
        <p>Acesso</p>
        <input className="cadAcesso1" />
      </div>
      <div>
        <label htmlFor="permissao">Adm</label>
        <input type={"Checkbox"} id="permissao"/>
        <label htmlFor="permissao">Noticias</label>
        <input type={"Checkbox"} id="permissao"/>
        {/* <label htmlFor="permissao">Cadastro</label>
        <input type={"Checkbox"} id="permissao"/> */}
        <label htmlFor="permissao">Cadastro de Veiculo</label>
        <input type={"Checkbox"} id="permissao"/>
      </div>
      <a href="../cadastroEmpresa/index.html#">
        <button className="cadVeiculo2">Próximo</button>
      </a>
    </div>
  </div>
</section>

         </>
    )


} export default CadastroUsuario;































