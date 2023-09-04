import "./style.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BotaoVoltar() {
    return (
        <>
        
            <button id="BotaoVoltar" >
                <div className="StyledButtonInnerWrapper-dcqKjp cXLjEX">
                    <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M22.003 11.032H4.125A88.136 88.136 0 0 1 8.89 6.45l-.888-.99c-.06.054-6 5.384-6 6.237 0 .877 5.94 6.237 6 6.29l.888-.99a80.595 80.595 0 0 1-4.782-4.635h17.895z" />
                    </svg>
                    <span className="StyledTextComponent-sc-hqqa9q ghPegq">
                        <span className="StyledMenuButtonText-jiANwy lkyGqx">Voltar</span>
                    </span>
                </div>
            </button>

        </>
    )
}

export default BotaoVoltar;