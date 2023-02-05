import {  useNavigate } from "react-router-dom";
import { usePizzasContext } from "../context/PizzasContext";

export default function Card( { pizza } ) {
  const navigate = useNavigate();
  const { desc, id, img, ingredients,name, price } = pizza;
  const { addPizza } = usePizzasContext();
  const listaIng = ingredients.map((x) =>
      <li key={x.toString()}>
        {x}
      </li>
    );

    const comprarClick = () => {
      addPizza({pizza})
      navigate("/cart");
    };

    const verDetalleClick = ( ) => {
      navigate(`/pizza/${id}`);

    };
  return (
    <article className="mb-2 col-12 col-md-6 col-xl-3">
      <div className="card">
        <img
          src={img}
          className="card-img-top"
          alt={desc}
        />
        <div className="card-body">
          <h2>
            <b>{name}</b>
          </h2>
          <h6>Ingredientes</h6>
          <ul>
             {listaIng} 
         </ul>
          <h5>
            <b>Precio: ${price}</b>
          </h5>
          <div className="d-flex gap-2">
            <a
              className="btn btn-outline-primary"
              onClick={comprarClick}>
              Comprar
            </a>
            <a
              className="btn btn-outline-danger"
              onClick={() => verDetalleClick()}
              >
              Ver detalles
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
