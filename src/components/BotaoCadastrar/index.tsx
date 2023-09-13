
// estilizacao

import "./style.css"

// rotas

import { Link } from "react-router-dom";


function BotaoCadastrar() {

    return (
        <Link to="/" className="btn_cadastrar">Cadastrar-se</Link>
    )

}
export default BotaoCadastrar;


