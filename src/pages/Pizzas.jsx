import Card from "../components/Card";
import { useEffect } from "react";
import { usePizzasContext } from "../context/PizzasContext";

export default function Pizzas() {
  const { listaPizzas, getData  } = usePizzasContext();

  useEffect(() => {  getData();}, []);

   return (
    <div>
      <h1>Pizzas</h1>
      <div className="row">
        {listaPizzas.map((item) => (
          <Card  key={item.id} pizza={item} />
        ))}
      </div>
    </div>
  );
}
 