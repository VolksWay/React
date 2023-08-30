import { Link } from "react-router-dom";
import "./style.css"

function BotaoEstouInteressado() {
    return (
        <>
        <Link className="prod_btn_card" to="#"> estou interessado</Link>

           {/*  <a className="prod_btn_card" href="#" alt="botao estou interessado">
                estou interessado
            </a> */}

        </>
    )

}

export default BotaoEstouInteressado;