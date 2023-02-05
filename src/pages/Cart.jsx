import CartItem from "../components/CartItem";
import { usePizzasContext } from "../context/PizzasContext";

export default function Cart() {
  const { pizzas } = usePizzasContext();

  return (
    <div>
      <h1 className="text-center my-5">Cart</h1>
      <ul className="list-group">
        {pizzas.map((item) => (
          <CartItem key={item.id} pizza={item} />
        ))}
        <li className="list-group-item list-group-item-action active text-end">
          <b>Total: $95.000</b>
        </li>
      </ul>
    </div>
  );
}
 