import React from "react";
import Form from "./components/Form";
import Meals from "./components/Meals";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <div className="form-container">
        <Form />
      </div>
      <div className="meal-container">
        <Meals />
      </div>
    </div>
  );
};

export default App;
