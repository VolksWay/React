import { Link } from "react-router-dom";
import "./style.css"

function SetaVoltar() {
    return (
        <>
            <Link className="div_voltar" to="#"> Voltar

          
                    <img
                        className="seta_voltar"
                        src="../cadastroTipoUsuario/img/img_setaVoltar-semFundo.png"
                        alt=""
                    />
               
            </Link>
        </>

    )
}
export default SetaVoltar;