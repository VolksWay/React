import { Link } from "react-router-dom";
import "./style.css"

function SetaVoltar() {
    return (
        <>
            <Link className="div_voltar" to="#">  <img
                        src="..\src\assets\img\img_setaVoltar-semFundo.png"
                        alt=""
                        className="seta_voltar"
                    /> Voltar

          
                  
               
            </Link>
        </>

    )
    //VOLTAR
}
export default SetaVoltar;