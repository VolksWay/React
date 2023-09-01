
// estilizacao

import "./style.css"

import imagem from "../../assets/img/banner_produto.png"

//rotas

import { Link } from "react-router-dom";

function VerMais() {

    return (

        <>

            {/* <div className="produtos_banner_conteudo">
                  <Link  to="/" className=" produtos_btn_banner"  >ver mais</Link>
                  </div> */}

            <main id="verMais">
                    <Link  to="/" className=" produtos_btn_banner"  >Ver Mais</Link>
            </main>





        </>

    )


} export default VerMais;