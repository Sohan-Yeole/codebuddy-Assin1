 // for my email validation use this password- ASdf12@#
// means
//===> AS  2  capital letter
//===> df  2  small letter
//===>  @ #  2 special charector letter
//===>  1 2   two numbers  then it works

import React, { useState } from "react";

function Form1() {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    //  validate email format by reg ex
    const pattern = /^[\w.-]+@[\w.-]+\.\w+$/;
    return pattern.test(email);
  };

  const validatePassword = (password) => {
    // R validate password format by reg ex
    const pattern = /^(?=.*[a-z]{2})(?=.*[A-Z]{2})(?=.*\d{2})(?=.*[@#$%^&+=]{2}).{8,}$/;
    return pattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (emailId === "") {
      alert("Email is required");
      return;
    } else if (!validateEmail(emailId)) {
      alert("Invalid email format");
      return;
    }

    // Validate password
    if (password === "") {
      alert("Password is required");
      return;
    } else if (!validatePassword(password)) {
      alert("Invalid password format");
      return;
    }

    setEmailId("");
    setPassword("");
  };

  return (
    <div>
      <h2>Form 1</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="emailId">Email:</label>
        <input
          type="text"
          id="emailId"
          name="emailId"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit" name="save">
          Save
        </button>{" "}
        <button type="button" name="saveAndNext" disabled>
          Save and Next
        </button>
        <hr/>
      </form>
    </div>
  );
}

export default Form1;
