
// estilizacao

import "./style.css"


//rotas

import { Link } from "react-router-dom";

function VerMais() {

    return (

        <>

            {/* <div className="produtos_banner_conteudo">
                  <Link  to="/" className=" produtos_btn_banner"  >ver mais</Link>
                  </div> */}

            <div className="banner1">
                <img id="slide-1" src="./img/banner_produto.png" />
                <div className="produtos_banner_conteudo">
                    <h2>a semana de ofertas já começou!!!</h2>
                    <p>
                        compre lançamentos exclusivos para quem é do clube e desbloqueie mais das
                        coisas que voce ama.
                    </p>
                    <a className="produtos_btn_banner" href="#">
                        ver mais
                    </a>
                </div>
            </div>




        </>

    )


} export default VerMais;