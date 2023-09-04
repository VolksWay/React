import "./style.css"
import Voltar from "../../assets/img/img_setaVoltar-semFundo.png"
import ImgCadastroVeiculo from "../../assets/img/img_cadastroEmpresa.svg"
import { Link } from "react-router-dom";
import { useState } from "react";

function CadastroEmpresa() {
    const [cnpj, setCNPJ] = useState<string>("");

    function validarCNPJ(cnpj: string) {
        return /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/.test(cnpj);
    }

    const handleCNPJ = (event: any) => {
        let input = event.target
        input.value = cnpjMask(input.value)
    }

    function cnpjMask(value: any) {
        if (!value) return "";
        
        // Remove todos os caracteres não numéricos
        value = value.replace(/\D/g, "");
    
        // Aplica a máscara
        value = value.replace(/(\d{2})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1/$2");
        value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    
        return value;
    }

    return (
        <main id="main_cadastro_empresa">
            <Link to={"/cadastro/veiculo"}>
                <div className="div_voltar">
                    <img className="seta_voltar" src={Voltar} alt="" />
                    <a className="aVoltar" href="">Voltar</a>
                </div>
            </Link>

            <section className="section">
                <form action="">
                    <div className="conteudo">
                        <div className="seuCadastro">
                            <p className="seu_cadastro">Cadastre a sua empresa!!</p>
                        </div>

                        <div className="seDestaca">
                            <span className="se_destaca">Preencha os dados do veículo para listarmos ofertas e notícias especiais
                            </span>
                        </div> <br />

                        <div className="inputs">
                            <div className="nome">
                                <label className="nomeInput">Nome</label> <br />
                                <input className="nome_input" type="text" />
                            </div>

                            <div className="nome">
                                <label className="nomeInput">CNPJ</label> <br />
                                <input onChange={(event) => { setCNPJ(event.target.value); handleCNPJ(event) }} maxLength={18} className="nome_input" type="text" />
                            </div>

                            <div className="nome">
                                <label className="nomeInput">Cidade</label> <br />
                                <input className="nome_input" type="text" />
                            </div>
                        </div>

                        {validarCNPJ(cnpj) === true && 
                        <div className="btn_proximo habilitado">
                            <Link to={"/cadastro/geral"} className="btnProximo">Próximo</Link>
                        </div>
                        }

                        {validarCNPJ(cnpj) === false && 
                        <div className="btn_proximo desabilitado">
                            <Link to={"/cadastro/empresa"} className="btnProximo">Próximo</Link>
                        </div>
                        }
                    </div>
                </form>

                <div className="imgIlustracao">
                    <img className="ilustracao" src={ImgCadastroVeiculo} alt="" />
                </div>
            </section>

        </main>
    )
}

export default CadastroEmpresa;