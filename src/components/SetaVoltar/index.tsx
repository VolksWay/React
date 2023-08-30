import "./style.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function seta_voltar() {
    return (
        <div>
            <div className="div_voltar">
                <a href="../home/index.html#">
                    <img
                        className="seta_voltar"
                        src="../cadastroTipoUsuario/img/img_setaVoltar-semFundo.png"
                        alt=""
                    />
                </a>
                <a href="../home/index.html#" className="aVoltar">
                    Voltar
                </a>
            </div>

        </div>
    )
}

export default seta_voltar;