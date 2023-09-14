//imagens
import imgLogo from "../../assets/img/logo_voksway.png";
import iconFace from "../../assets/img/face_branco.png";
import iconInsta from "../../assets/img/instagram.svg";
import iconLinkedin from "../../assets/img/linkedin.svg";
//estilização
import "./style.css";

//rotas
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
        <div className="container direction_row space_between align_center alinhamento_footer">
            <div>
                <img className="img_footer" src={imgLogo} alt="Logo da Volkswagen"/>
                <div>
                    <span>Como falar com a gente?</span>
                    <p className="footer_text">meajuda@VolksWay.com.br</p>
                </div>
            </div>

            <nav className="direction_column nav_desktop">
                <a className="footer_text" href="">Home</a>
                <a className="footer_text" href="">Como funciona</a>
                <a className="footer_text" href="">Mais vendidos</a>
                <a className="footer_text" href="">Quem somos</a>
            </nav>

            <nav className="direction_column nav_desktop">
                <a className="footer_text" href="">Contato</a>
                <a className="footer_text" href="">Notícias</a>
                <a className="footer_text" href="">FAQ</a>
                <a className="footer_text" href="">Por que a VolksWay?</a>
            </nav>

            <div className="nav_mobile">
                <nav className="direction_column primeira_nav">
                    <a className="footer_text" href="">Home</a>
                    <a className="footer_text" href="">Como funciona</a>
                    <a className="footer_text" href="">Mais vendidos</a>
                    <a className="footer_text" href="">Quem somos</a>
                </nav>

                <nav className="direction_column">
                    <a className="footer_text" href="">Contato</a>
                    <a className="footer_text" href="">Notícias</a>
                    <a className="footer_text" href="">FAQ</a>
                    <a className="footer_text" href="">Por que a VolksWay?</a>
                </nav>
            </div>

            <div className="space_between imgs_social_medias">
                <img src={iconInsta} alt="Logo do instagram"/>
                <img src={iconFace} alt="Logo do facebook"/>
                <img src={iconLinkedin} alt="Logo do linkend"/>
            </div>
        </div>
    </footer>
  );
}

export default Footer;