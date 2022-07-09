import { Routes, Route } from "react-router-dom";
import { FoodList } from "./Pages/FoodList";
import { Form } from "./Pages/Form";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<FoodList />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}
