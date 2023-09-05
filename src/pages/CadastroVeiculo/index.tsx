import "./style.css"
import Voltar from "../../assets/img/arrow-left-solid 1.png"
import FundoVeiculo from "../../assets/img/Group 2452.png"
import { Link } from "react-router-dom";
import { useState } from "react";

function CadastroVeiculo() {
    const [placa, setPlaca] = useState<string>("");
    const [codigoChassi, setCodigoChassi] = useState<string>("");
    const [marca, setMarca] = useState<string>("");

    const placaMask = (value: any) => {
        if (!value) return '';

        // Remove todos os caracteres não alfanuméricos, exceto letras e números
        value = value.replace(/[^a-zA-Z0-9]/g, '');

        // Adicione a máscara
        value = value.replace(/^(\w{0,3})(\w{0,4})$/, '$1-$2');

        return value;
    };

    const handlePlaca = (event: any) => {
        let input = event.target
        input.value = placaMask(input.value)
    }
    
    const handleCodigoChassi = (event: any) => {
        let input = event.target
        input.value = codigoChassiMask(input.value)
    }

    function codigoChassiMask(vin: any) {
        // Remove todos os caracteres não alfanuméricos
        vin = vin.replace(/[^a-zA-Z0-9]/g, '');

        // Limita o VIN a 17 caracteres
        vin = vin.slice(0, 17);

        // Divide o VIN em grupos de 5, 5 e 7 caracteres
        const match = vin.match(/.{1,5}/g);
        if (!match) {
            return vin;
        }

        // Adiciona hífens entre os grupos
        const formattedVIN = match.join('-');

        return formattedVIN;
    }

    return (
        <main id="main_cadastro_veiculo">
            <section className="cadastroVeiculo">
                <div className="conteudo_cadVeiculo">
                    <Link to={"/cadastro/usuario"}></Link>
                    <div className="div_voltar">
                        <Link to={"/cadastro/usuario"}>
                            <img
                                className="seta_voltar"
                                src={Voltar}
                                alt=""
                            />
                        </Link>
                        <a className="spanVoltar">Voltar</a>
                    </div>
                    <div className="chamada">
                        <h1> Cadastre o seu veículo!</h1>
                        <p className="cad_texto">
                            Preencha os dados do veículo para conseguir checar a segurança dele
                        </p>
                    </div>
                    <div className="formulario_CadVeiculo">
                        <div>
                            <p>Código do Chassi</p>
                            <input onChange={(event) => { setCodigoChassi(event.target.value); handleCodigoChassi(event) }} className="cadVeiculo1" />
                        </div>
                        <div>
                            <p>Placa</p>
                            <input onChange={(event) => { setPlaca(event.target.value); handlePlaca(event) }} maxLength={8} className="cadVeiculo1" />
                        </div>
                        <div>
                            <p>Marca</p>
                            <input className="cadVeiculo1" />
                        </div>
                        <Link to={"/cadastro/empresa"}>
                            <button className="cadVeiculo2">Próximo</button>
                        </Link>
                    </div>
                </div>
                <img className="fundo" src={FundoVeiculo} alt="" />
            </section>
        </main>
    )
}

export default CadastroVeiculo;