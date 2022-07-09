import { Container } from "./FoodListStyle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pen, Trash } from "phosphor-react";

interface FoodListType {
  _id: string;
  foodName: string;
  daysSinceIAte: number;
}

export function FoodList() {
  const [foodList, setFoodList] = useState<FoodListType[]>([]);
  console.log(foodList);

  useEffect(() => {
    axios
      .get("http://localhost:3001/read")
      .then((res) => setFoodList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <header>
        <h1>C.R.U.D with axios{"()"}</h1>
      </header>
      <div className="main">
        <h3>My foods</h3>
        <div className="foodListContainer">
          <ul>
            {foodList?.map((item) => {
              return (
                <li key={item._id}>
                  <span>Comida: {item.foodName}</span>
                  <span>Dias desde que eu comi: {item.daysSinceIAte}</span>
                  <div className="actions">
                    <Pen size={25} className="pencil" />
                    <Trash size={25} className="trash" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="buttonContainer">
          <Link to="/form" id="button">
            Adicionar Comida
          </Link>
        </div>
      </div>
    </Container>
  );
}
