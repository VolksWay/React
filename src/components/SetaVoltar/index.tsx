import "./style.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function seta_voltar() {
    return (
        <>
            <div ClassName="div_voltar">
                <a href="../home/index.html#">
                    <img
                        ClassName="seta_voltar"
                        src="../cadastroTipoUsuario/img/img_setaVoltar-semFundo.png"
                        alt=""
                    />
                </a>
                <a href="../home/index.html#" ClassName="aVoltar">
                    Voltar
                </a>
            </div>

        </>
    )
}

export default seta_voltar;