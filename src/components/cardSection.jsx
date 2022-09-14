import "../css/cardSection.css";
import CardProd from "./cardProd";

export default cardSection;

function cardSection() {
  const prod1 = {
    nome: "Salada Variada",
    valor: 22,
    img: "https://img.itdg.com.br/tdg/images/blog/uploads/2018/04/salada.jpg",
  };
  const prod2 = {
    nome: "Tomatinho Cerejaa",
    valor: 15,
    img: "https://images.squarespace-cdn.com/content/v1/5b8edfa12714e508f756f481/1538681443982-L8FV5J7802OB8LOU6193/tomate-cereja.jpg?format=1000w",
  };
  const prod3 = {
    nome: "Salado Com Salmão",
    valor: 55.22,
    img: "https://www.receitasaudaveis.com/wp-content/uploads/2018/06/765_360_salad-with-smoked-salmon-and-lemon_14986513691.jpg",
  };
  const prod4 = {
    nome: "Salada com Cebola Roxa",
    valor: 15.89,
    img: "https://receitasvitais.com.br/wp-content/uploads/2020/09/salada-de-folhas-frescas-cebola-roxa-pepino-e-tomatinhos-cereja.jpg"
  };

  return (
    <div className="cardSection">
      <CardProd prod={prod1} />
      <CardProd prod={prod2} />
      <CardProd prod={prod3} />
      <CardProd prod={prod4} />
    </div>
  );
}
