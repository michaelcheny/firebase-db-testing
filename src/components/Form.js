import React from "react";
import { useForm } from "react-hook-form";
import firebase from "../firebase";
import { format } from "date-fns";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const content = data.content.split(",").map((i) => i.trim());
    // debugger;
    firebase
      .firestore()
      .collection("foods")
      .add({
        meal: data.meal,
        content,
        description: data.description,
        time: format(Date.now(), "PPp"),
      });
    reset({
      meal: "",
      content: "",
      description: "",
    });
  };

  return (
    <>
      <h1>Food Form</h1>
      <form className="meal-form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="meal" placeholder="name" ref={register} />
        <input name="content" placeholder="content" ref={register} />
        <textarea name="description" placeholder="description" ref={register}></textarea>
        <input type="submit" className="submit-btn" />
      </form>
    </>
  );
};

export default Form;
