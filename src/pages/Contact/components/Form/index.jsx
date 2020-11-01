import React from "react";
import Button from "./Button";
import styles from "./form.module.css"

function Form() {

const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Contact");
}

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Contact</h1>
      <label>Name</label>
      <input placeholder="Name" />
      <label>Email</label>
      <input placeholder="Email" />
      <label>Message</label>
      <textarea placeholder="Message"></textarea>
      <Button />
    </form>
  );
}

export default Form;
