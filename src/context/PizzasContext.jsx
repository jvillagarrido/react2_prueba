import { createContext, useContext, useState } from "react";

export const PizzasContext = createContext();

export default function PizzasProvider({ children } ) {

  const [pizzas, setPizzas] = useState([]);
  const [listaPizzas, setListaPizzas] = useState([]);

    const getData = async () => {
    const res = await fetch("pizzas.json");
    const data = await res.json();
    setListaPizzas(data);
  };

  const addPizza = ({pizza}) => {
    const { desc, id, img, ingredients,name, price } = pizza;
    /* cargar en favoritos solo una vez aunque la seleccione muchas veces*/
    let ind = pizzas.findIndex((ele) => ele.id == {id});
      if (ind==-1)
      {
        setPizzas([...pizzas, { ...pizza }]);
      }
  };
 

  return (
     <PizzasContext.Provider value={{ pizzas, addPizza, listaPizzas,setListaPizzas, getData }}>
      {children}
       </PizzasContext.Provider>
  );
}

// mini hook
export const usePizzasContext = () => useContext(PizzasContext);
