import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Valid email is required.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is a required field.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className="RC-flex">
      <div>
        <h1>Get In Touch</h1>
        <form
        action="https://formsubmit.co/jordan.degerness@gmail.com"
        method="POST"  
        id="contact-form"
          className="contact-form-flex"
          onSubmit={handleSubmit}
        >
          <div className="field-padding">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              name="name"
              dafaultValue={name}
              onBlur={handleChange}
              className="contact-field"
            />
          </div>

          <div className="field-padding">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
              className="contact-field"
            />
          </div>

          <div className="field-padding">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="6"
              defaultValue={message}
              onBlur={handleChange}
              className="contact-field"
            />
          </div>

          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <br></br>
      <div className="dog-photo">
        <img src={require(`../../assets/Milo.jpg`)} alt={`Milo, the dog`}></img>
      </div>
    </section>
  );
}

export default ContactForm;
