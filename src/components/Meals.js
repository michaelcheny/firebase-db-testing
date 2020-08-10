/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import firebase from "../firebase";

const filterMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("foods")
      .where("content", "array-contains", "milk")
      // .orderBy("time", "desc")
      .get()
      .then((snapshot) => {
        const foods = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMeals(foods);
      }, []);
    // .onSnapshot((snapshot) => {
    //   const foods = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }));
    //   setMeals(foods);
    // });
  });
  return meals;
};

const Meals = () => {
  const meals = filterMeals();

  return (
    <>
      <h1>Meals</h1>
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </>
  );
};

export default Meals;

const Meal = ({ meal }) => {
  // console.log(meal);
  return (
    <div className="meal-box">
      <div className="meal">
        {meal.meal}
        <span className="time">{meal.time}</span>
      </div>
      <div className="content">{meal.content}</div>
      <div className="description">{meal.description}</div>
    </div>
  );
};
