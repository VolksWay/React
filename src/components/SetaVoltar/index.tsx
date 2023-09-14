import { Link } from "react-router-dom";
import "./style.css"

function SetaVoltar(props: any) {
    return (
        <>
            <Link className="div_voltar" to={`/${props.pagina}`}>  <img
                        src="..\src\assets\img\img_setaVoltar-semFundo.png"
                        alt=""
                        className="seta_voltar"
                    /> Voltar    
            </Link>
        </>

    )
}
export default SetaVoltar;