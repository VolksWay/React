// estitlizacao
import "./style.css"

//roots

import { Link } from "react-router-dom";




function CardsDescontos() {

  return (

    <>
     {/* <main id="CardsDescontos"></main> */}

       <section className="container_75 space_evenly direction_column home_saiba_mais">
        <div className="direction_row space_between align_center">
          <div className="home_card_desconto direction_row space_around align_center">
            <div className="home_card_conteudo">
              <span>Descontos</span>
              <span className="home_card_desconto_texto">de até</span>
            </div>
            <hr />
            <span>30%</span>
          </div>
          <div className="home_card_desconto antepenultimo direction_row space_around align_center">
            <div className="home_card_conteudo">
              <span>Peças</span>
              <span className="home_card_desconto_texto">de até R$1000</span>
            </div>
            <hr />
            <span>10%</span>
          </div>
          <div className="home_card_desconto penultimo direction_row space_around align_center">
            <div className="home_card_conteudo">
              <span>Veículos</span>
              <span className="home_card_desconto_texto">de até R$500.000</span>
            </div>
            <hr />
            <span>20%</span>
          </div>
          <div className="home_card_desconto ultimo direction_row space_around align_center">
            <div className="home_card_conteudo">
              <span>Veículos</span>
              <span className="home_card_desconto_texto">a partir de R$800.000</span>
            </div>
            <hr />
            <span>30%</span>
          </div>
        </div>
        <div
          className="direction_column space_between home_saiba_mais_alinhamento"
          id="noticias"
        >
          <h2 className="home_titulo_saiba">
            Saiba Mais - <span>Notícias e Produtos</span>
          </h2>
          <div className="home_card_saiba space_evenly">
            <div>
              <p>
                Encontre o seu caminhão perfeito! Além das melhores peças do mercado.
              </p>
              <Link to={"#"}>Ver mais</Link>
            </div>
          </div>
          <div className="direction_row space_between alinhamento_cards_saiba">
            <div className="home_card_saiba none_600px space_evenly">
              <div>
                <p>
                  Encontre o seu caminhão perfeito! Além das melhores peças do
                  mercado.
                </p>
                <Link to={"#"}>Ver mais</Link>
              </div>
            </div>
            <div className="home_card_saiba none_900px space_evenly">
              <div>
                <p>
                  Encontre o seu caminhão perfeito! Além das melhores peças do
                  mercado.
                </p>
                <Link to={"#"}>Ver mais</Link>
              </div>
            </div>
            <div className="home_card_saiba ultimo space_evenly">
              <div>
                <p>
                  Encontre o seu caminhão perfeito! Além das melhores peças do
                  mercado.
                </p>
                <Link to={"#"}>Ver mais</Link>
              </div>
            </div>
          </div>
        </div>
        </section>

    </>


  )


} export default CardsDescontos;