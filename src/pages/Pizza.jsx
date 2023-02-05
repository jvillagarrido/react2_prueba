import { usePizzasContext } from "../context/PizzasContext";
import { useParams } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

export default function Pizza( ) {
  const navigate = useNavigate();
  const { listaPizzas, addPizza  } = usePizzasContext();
  const { ident } = useParams();
  const ind2 = listaPizzas.filter((ele) => ele.id == ident);
 
  const comprarClick = ({ x }) => {
   // addPizza({x});
    navigate("/cart");
  };

  return (
      ind2.map((x) => (
     
      <div key= {x.id} className="card mb-3 mt-5">
        <div className="row g-0">
             <div className="col-md-4">
                <img
                  src={x.img}
                  className="img-fluid rounded-start h-100"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="fs-1"> </h5>
                  <p className="card-text">
                  {x.desc}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      { x.ingredients.map((y) =>    
                         <li key={y.toString()}>
                            {y}
                          </li>
                      )} 
                    </small>
                  </p>
                  <div className="btn btn-outline-primary"   onClick={( {x}) => comprarClick({x} )}>Comprar</div>
                 
                </div>
              </div>
        </div>
      </div>
    )));
 
}
 
