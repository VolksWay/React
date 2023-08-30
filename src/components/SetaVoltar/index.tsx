import "./style.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function seta_voltar() {
    return (
        <>
            <div className="div_voltar"><Link to={"../home/index.html#"}>voltar</Link>

                <img
                    className="seta_voltar"
                    src="../cadastroTipoUsuario/img/img_setaVoltar-semFundo.png"
                    alt=""
                />

            </div >
        </>
    )
}

export default seta_voltar;