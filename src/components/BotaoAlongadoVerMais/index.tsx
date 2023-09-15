import { Link } from "react-router-dom";
import "./style.css"

function BotaoAlongadoVerMais() {
    return (
        <div id="botaoAlongado">
            <Link className="prod_btn_noticias" to={"/"}>ver mais</Link>
        </div>
    )
}
export default BotaoAlongadoVerMais;