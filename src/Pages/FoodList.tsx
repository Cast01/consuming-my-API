import { Container } from "./FoodListStyle";
import { Link } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Pen, Trash, X } from "phosphor-react";

interface FoodListType {
  _id: string;
  foodName: string;
  daysSinceIAte: number;
}

export function FoodList() {
  const [foodList, setFoodList] = useState<FoodListType[]>([]);
  const [foodName, setFoodName] = useState("");
  const [daysSinceIAte, setDaysSinceIAte] = useState("");
  const [id, setId] = useState("");
  const [modal, setModal] = useState(false);

  function updateList(e: FormEvent) {
    e.preventDefault();

    axios.put("https://food-list-pedrotech-mongodb.herokuapp.com/update", {
      id,
      foodName,
      daysSinceIAte,
    });

    setFoodName("");
    setDaysSinceIAte("");

    setModal(false);

    window.alert("Comida atualizada!");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  function updateValue(id: string, food: string, days: number) {
    setModal(true);
    setId(id);
    setFoodName(food);
    setDaysSinceIAte(days.toString());
  }

  function deleteFood(id: string) {
    axios.delete(
      `https://food-list-pedrotech-mongodb.herokuapp.com/delete/${id}`
    );

    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  useEffect(() => {
    axios
      .get("https://food-list-pedrotech-mongodb.herokuapp.com/read")
      .then((res) => setFoodList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container modal={modal}>
      <div className="updateFormModal">
        <form onSubmit={updateList}>
          <div className="close">
            <X
              size={25}
              className="closeIcon"
              onClick={() => setModal(false)}
            />
          </div>
          <label htmlFor="foodName">Nome da comida:</label>
          <input
            type="text"
            name="foodName"
            id="foodName"
            onChange={(e) => setFoodName(e.target.value)}
            value={foodName}
          />
          <label htmlFor="daysSinceIAte">Dias desde que eu comi:</label>
          <input
            type="number"
            name="daysSinceIAte"
            id="daysSinceIAte"
            onChange={(e) => setDaysSinceIAte(e.target.value)}
            value={daysSinceIAte}
          />
          <button type="submit">Atualizar</button>
        </form>
      </div>
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
                    <Pen
                      size={25}
                      className="pencil"
                      onClick={() =>
                        updateValue(item._id, item.foodName, item.daysSinceIAte)
                      }
                    />
                    <Trash
                      size={25}
                      className="trash"
                      onClick={() => deleteFood(item._id)}
                    />
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
