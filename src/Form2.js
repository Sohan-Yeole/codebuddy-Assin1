import React, { useState } from "react";

function Form2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const validateName = (name) => {
    // Reg ex to validate alphabets only
    const pattern = /^[A-Za-z]+$/;
    return pattern.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate first name
    if (firstName === "") {
      alert("First name is required");
      return;
    } else if (firstName.length < 2 || firstName.length > 50) {
      alert("First name must be between 2 and 50 characters");
      return;
    } else if (!validateName(firstName)) {
      alert("First name can only contain alphabets");
      return;
    }

    // Validate last name
    if (lastName !== "" && !validateName(lastName)) {
      alert("Last name can only contain alphabets");
      return;
    }

    // Validate address
    if (address === "") {
      alert("Address is required");
      return;
    } else if (address.length < 10) {
      alert("Address must be at least 10 characters long");
      return;
    }

    setFirstName("");
    setLastName("");
    setAddress("");
  };

  return (
    <div>
      <h2>Form 2</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
      </form>
      <hr/>

    </div>
  );
}

export default Form2;
