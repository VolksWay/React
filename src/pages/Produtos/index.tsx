import "./style.css"
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import CardNoticiasRecentes from '../../components/CardNoticiasRecentes';
import Parse from 'parse/dist/parse.min.js';
import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import CardOfertas from "../../components/CardOfertas";
import api from "../../utils/api";
import CardOfertasPneu from "../../components/cardOfertasPneu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PARSE_APPLICATION_ID = '1QJ5n2ix95flGl0Rt7b1l4CfbqXuYQcj7VU0oKGd';
const PARSE_JAVASCRIPT_KEY = 'R3yYjaaJbXJNHSCT6NqVjxXZBqZjllwQzTuGUyvi';
const PARSE_REST_API = 'aTuaHYnGDCCvEXeN4j3eyLfGxBbNnqH7zL5UAfxA';
const MASTER_KEY = "F4vFzZm6HASmvFNv9TihqyVvEIPJhxs5uXY9Sebu"
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);

function Produtos() {
    const [conteudoBanner, setConteudoBanner] = useState<any[]>([]);
    const [conteudoOfertas, setConteudoOfertas] = useState<any[]>([]);
    const [conteudoPromocoes, setConteudoPromocoes] = useState<any[]>([]);
    const [conteudoNoticiasR, setConteudoNoticiasR] = useState<any[]>([]);
    const [listarConteudo, setListarConteudo] = useState<Boolean>(false);

    function listarPropagandas() {
        // event.preventDefault();
        console.log("teste");

        // /* console.log(cpf) */
        api.get(`/propagandas`).then((resposta) => {
            if (resposta.status === 200) {
                let produtos = resposta.data;
                console.log(produtos)
                for (let i = 0; i < produtos.length; i++) {


                    if (produtos[i].nome_tipo_propaganda == "Banner") {
                       // setConteudoBanner([...conteudoBanner, { id: produtos[i].id, url: produtos[i].url, titulo: produtos[i].titulo, descricao: produtos[i].descricao, img: produtos[i].img}])
                        conteudoBanner.push({ id: produtos[i].id, url: produtos[i].url, titulo: produtos[i].titulo, descricao: produtos[i].descricao, img: produtos[i].img })
                    }

                    if (produtos[i].nome_tipo_propaganda == "Noticia") {
                    //setConteudoNoticiasR([...conteudoNoticiasR, { id: produtos[i].id, url: produtos[i].url, titulo: produtos[i].titulo, descricao: produtos[i].descricao, img: produtos[i].img}])
                       conteudoNoticiasR.push({ id: produtos[i].id, url: produtos[i].url, titulo: produtos[i].titulo, descricao: produtos[i].descricao, img: produtos[i].img })
                    }

                    if (produtos[i].nome_tipo_propaganda == "Promocao") {
                        //setConteudoPromocoes([...conteudoPromocoes, { id: produtos[i].id, url: produtos[i].url, titulo: produtos[i].titulo, descricao: produtos[i].descricao, img: produtos[i].img, preco: produtos[i].preco, dataLimite: produtos[i].data_limite }])
                        conteudoPromocoes.push({ id: produtos[i].id, url: produtos[i].url, titulo: produtos[i].titulo, descricao: produtos[i].descricao, img: produtos[i].img, preco: produtos[i].preco, dataLimite: produtos[i].data_limite })
                    }

                    if (produtos[i].nome_tipo_propaganda == "Oferta") {
                        //setConteudoOfertas([...conteudoOfertas, { id: produtos[i].id, url: produtos[i].url, titulo: produtos[i].titulo, descricao: produtos[i].descricao, img: produtos[i].img, preco: produtos[i].preco, dataLimite: produtos[i].data_limite }])
                        conteudoOfertas.push({ id: produtos[i].id, url: produtos[i].url, titulo: produtos[i].titulo, descricao: produtos[i].descricao, img: produtos[i].img, preco: produtos[i].preco, dataLimite: produtos[i].data_limite })
                    }
                }

                setListarConteudo(true)
                console.log(conteudoBanner)
                console.log(conteudoNoticiasR)
                console.log(conteudoPromocoes)
                console.log(conteudoOfertas)

            }
        })
            .catch((erro) => {
                console.log(erro); // Trata erros de solicitação
            });
    }


    useEffect(() => {
        listarPropagandas();
    }, []);

    return (
        <>
            <Header />
            <main id="produtos">
                <section>
                    {listarConteudo === true && <Banner conteudo={conteudoBanner} />}
                </section>

                <div className="produtos_ofertas_h2 produtos_posicionamento">
                    <h2 />
                </div>

                <section>
                {listarConteudo === true && <CardOfertas conteudo={conteudoOfertas} />}
                </section>


                <section className="prod_promocoes produtos_posicionamento">

                    <h2>promoções</h2>
                    <p>as promoçoes do mês começaram!!<br />confira as melhores ofertas de peças do mercado feitas pelos
                        nossos parceiros</p>

                    <div className="carrossel">
                        <div className="cardPromocoes">
                            {listarConteudo === true &&
                                conteudoPromocoes.map((conteudoPromocoes: any, indice: number) => {
                                    return <div key={indice}>
                                        <CardOfertasPneu
                                            id={conteudoPromocoes.id}
                                            imagem={conteudoPromocoes.img}
                                            titulo={conteudoPromocoes.titulo}
                                            descricao={conteudoPromocoes.descricao}
                                            preco={conteudoPromocoes.preco}
                                            url={conteudoPromocoes.url}
                                        />
                                    </div>
                                })
                            }
                        </div>

                    </div>

                </section>



                <div className="prod_noticias_h2 produtos_posicionamento">
                    <h2 />
                </div>

                <section id="CardNoticiasRecentes" >
                    <section className="prod_noticias_recentes">
                        {listarConteudo === true &&
                            conteudoNoticiasR.map((conteudoNoticiasR: any, indice: number) => {
                                return <>
                                    <CardNoticiasRecentes
                                        key={conteudoNoticiasR.id}
                                        titulo={conteudoNoticiasR.titulo}
                                        imagem={conteudoNoticiasR.img}
                                        descricao={conteudoNoticiasR.descricao}
                                        url={conteudoNoticiasR.url} />
                                </>
                            })
                        }
                    </section>
                </section>

            </main >
            <Footer />
        </>
    )
}
export default Produtos;