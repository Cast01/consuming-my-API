import { FormEvent, useState } from "react";
import { Container } from "./FormStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Form() {
  const [foodName, setFoodName] = useState("");
  const [daysSinceIAte, setDaysSinceIAte] = useState("");

  const navigate = useNavigate();

  function addToList(e: FormEvent) {
    e.preventDefault();

    axios.post("http://localhost:3001/insert", {
      foodName,
      daysSinceIAte,
    });

    navigate("/");
  }

  return (
    <Container>
      <header>
        <h1>C.R.U.D with axios{"()"}</h1>
      </header>
      <div className="formContainer">
        <form onSubmit={addToList}>
          <label htmlFor="foodName">Food name:</label>
          <input
            type="text"
            name="foodName"
            id="foodName"
            onChange={(e) => setFoodName(e.target.value)}
          />
          <label htmlFor="daysSinceIAte">Days since you ate it:</label>
          <input
            type="number"
            name="daysSinceIAte"
            id="daysSinceIAte"
            onChange={(e) => setDaysSinceIAte(e.target.value)}
          />
          <button type="submit">Add to list</button>
        </form>
      </div>
    </Container>
  );
}
