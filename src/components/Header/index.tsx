
import "./style.css";
import imgLogo from "../../assets/img/logo_voksway.png";
import { Link } from "react-router-dom";

function Header() {
    return (

        <div id="header">
            <header className="direction_row align_center posicionamento_header">
            <img src={imgLogo} alt="Logo da Volkswagen"/>

                <a href="#" id="menu_barras" className="menu_barras" /*onclick="btnMenu()"*/ aria-label="Abrir um menu"
                    aria-controls="links" aria-expanded="false" aria-haspopup="true"><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg></a>

                <nav className="space_evenly links" id="links">
                    <div>
                        <a href="#">volks<span>way</span></a>
                        <a href="#" id="menu_barras" className="menu_barras" /*onclick="btnMenu()"*/ aria-label="Fechar um menu"
                            aria-controls="links" aria-expanded="true" aria-haspopup="false">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path
                                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </a>
                    </div>

                    <a className="navegacao_header" href="">Noticias</a>
                    <a className="navegacao_header" href="">Quem somos</a>
                    <a className="navegacao_header" href="">Por que a VolksWay?</a>
                    <a className="navegacao_header" href="">Contato</a>
                </nav>
        </header>
        </div>
        
    );

}


export default Header;
