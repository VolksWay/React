
// estilizacao

import "./style.css"

// rotas

import { Link } from "react-router-dom";


function BotaoCadastrar (){

    return(

         
        <>

        <main id="BotaoCadastrar">

        {/* <div className="home_botao_cadastrar">
                  <Link  to="/" className=" home_btn_cadastrar"  >Cadastrar-se</Link>
                  </div> */}

        <div id="btn_cadastrar">

        <Link to="/" className="btn_cadastrar">Cadastrar-se</Link>
        
        </div>
        
        </main>

        </>

)

} 
export default BotaoCadastrar;
    

