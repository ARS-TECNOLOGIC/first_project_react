import "../css/cardSection.css";
import { useState } from "react";
export default CardProd;

function CardProd(props) {
  const [selecionado, setSelecionado] = useState(0);
  console.log(selecionado);

  function selecionar(val) {
    setSelecionado(val);
  }
  return (
    <div className={selecionado ? "cardProd cardProdSelect" : "cardProd"}>
      <img
        className="cardFotProd"
        src={props.prod.img}
        alt="Imagem do Poduto"
      />
      <span>{props.prod.nome}</span>
      <div className="cardProdValor">
        <span className="prodValor">${props.prod.valor}</span>
        <button
          className={
            selecionado
              ? "cardProdButton cardProdButtonSelect"
              : "cardProdButton"
          }
          onClick={() => {
            selecionar(!selecionado);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
