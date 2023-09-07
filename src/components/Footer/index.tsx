//imagens
import imgLogo from "../../assets/images/logo.png";
import iconFace from "../../assets/images/face_branco.png";
import iconInsta from "../../assets/images/instagram.svg";
import iconLinkedin from "../../assets/images/linkedin.svg";
//estilização
import "./style.css";

//rotas
import { Link/* , useLocation  */} from "react-router-dom";

function Footer() {

/*   const location = useLocation(); */


  return (
    <footer>
      <div className="container direction_row space_between align_center alinhamento_footer">
        <div>
          <img
            className="img_footer"
            src={imgLogo} 
            alt="Logo da Volkswagen"
          />
          <div>
            <span>Como falar com a gente?</span>
            <p className="footer_text">meajuda@VolksWay.com.br</p>
          </div>
        </div>
        <nav className="direction_column nav_desktop">
          <Link className="footer_text" to={"#"}>
            Home
          </Link>
          <Link className="footer_text" to={"#"}>
            Como funciona
          </Link>
          <Link className="footer_text" to={"#"}>
            Mais vendidos
          </Link>
          <Link className="footer_text" to={"#"}>
            Quem somos
          </Link>
        </nav>
        <nav className="direction_column nav_desktop">
          <Link className="footer_text" to={"#"}>
            Contato
          </Link>
          <Link className="footer_text" to={"#"}>
            Notícias
          </Link>
          <Link className="footer_text" to={"#"}>
            FAQ
          </Link>
          <Link className="footer_text" to={"#"}>
            Por que a VolksWay?
          </Link>
        </nav>
        <div className="nav_mobile">
          <nav className="direction_column primeira_nav">
            <Link className="footer_text" to={"#"}>
              Home
            </Link>
            <Link className="footer_text" to={"#"}>
              Como funciona
            </Link>
            <Link className="footer_text" to={"#"}>
              Mais vendidos
            </Link>
            <Link className="footer_text" to={"#"}>
              Quem somos
            </Link>
          </nav>
          <nav className="direction_column">
            <Link className="footer_text" to={"#"}>
              Contato
            </Link>
            <Link className="footer_text" to={"#"}>
              Notícias
            </Link>
            <Link className="footer_text" to={"#"}>
              FAQ
            </Link>
            <Link className="footer_text" to={"#"}>
              Por que a VolksWay?
            </Link>
          </nav>
        </div>
        <div className="space_between imgs_social_medias">
          <img src={iconInsta} alt="Logo do instagram" />
          <img src={iconFace} alt="Logo do facebook" />
          <img src={iconLinkedin} alt="Logo do linkend" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
