import { FormEvent, useState } from "react";
import { Container } from "./FormStyle";
import axios from "axios";
import { Link } from "react-router-dom";

export function Form() {
  const [foodName, setFoodName] = useState("");
  const [daysSinceIAte, setDaysSinceIAte] = useState("");

  function addToList(e: FormEvent) {
    e.preventDefault();

    axios.post("https://food-list-pedrotech-mongodb.herokuapp.com/insert", {
      foodName,
      daysSinceIAte,
    });

    setFoodName("");
    setDaysSinceIAte("");

    window.alert("Comida adicionada á lista!");
  }

  return (
    <Container>
      <header>
        <h1>C.R.U.D with axios{"()"}</h1>
      </header>
      <div className="formContainer">
        <form onSubmit={addToList}>
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
          <button type="submit">Add to list</button>
        </form>
      </div>
      <footer>
        <Link to="/" id="button">
          Minha Lista
        </Link>
      </footer>
    </Container>
  );
}
