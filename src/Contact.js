import React from "react";

const Contact = () => {
  return (
    <div className="create">
      <h2>Contact us!</h2>
      <form>
        <label>Name:</label>
        <input type="text" required />

        <label>Email:</label>
        <input type="text" required />

        <label>Message:</label>
        <textarea required></textarea>

        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
