import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from "react";

function CardNoticiasRecentes(props: any) {


    return (

        <div className="prod_card_noticias">
            <img src={props.imagem} alt="" />
            <div className="prod_card_branco">
                <div className="prod_paragrafo">
                    <h3>{props.titulo}</h3>
                    <p>
                        {props.descricao}
                    </p>
                </div>
                <div>
                    <a className="prod_btn_noticias" href="#">
                        ver mais
                    </a>
                </div>
            </div>
        </div>


    );
}


export default CardNoticiasRecentes;