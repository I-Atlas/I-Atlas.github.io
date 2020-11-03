import React from "react";
import emailjs from "emailjs-com";
import { Button } from "./components";
import { Toast } from "../../../../utils";
import styles from "./form.module.css";

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_i3rwyvu",
        event.target,
        "user_aW1zJ4Aq4c64HRJWfgSbI"
      )
      .then(
        (result) => {
          Toast.successToast("👌 Your email has been sent!");
          console.log(result.text);
        },
        (error) => {
          Toast.errorToast("⛔ Your email has been blocked!");
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Contact</h1>
      <label>Name</label>
      <input type="text" name="name" required placeholder="Name" />
      <label>Email</label>
      <input type="email" name="email" required placeholder="Email" />
      <label>Message</label>
      <textarea name="message" required placeholder="Message"></textarea>
      <Button />
    </form>
  );
}

export default Form;
