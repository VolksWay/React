
import { Link/* , useLocation  */ } from "react-router-dom";

function Linhas() {

    return (

        <tr className="cad_ofertas_campos">
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <Link to='#'>
                    <img src="./img/Pencil Drawing.svg" alt="" />
                </Link>
            </td>
            <td>057</td>
            <td>Frete gratis </td>
            <td>Cupom</td>
            <td>Banner Menu</td>
            <td>Clientes volks</td>
            <td>Todos os canais</td>
            <td>
                <img src="./img/visivel.svg" alt="" />
            </td>
        </tr>

    );
}

export default Linhas;