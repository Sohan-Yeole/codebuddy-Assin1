import React, { useState } from "react";

function Form3({ activeForm, setActiveForm }) {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const countries = [
    { code: "+91", name: "India" },
    { code: "+1", name: "America" }
  ];

  const validatePhoneNumber = (number) => {
    // Regular expression to validate 10-digit numeric phone number
    const pattern = /^\d{10}$/;
    return pattern.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate country code
    if (countryCode === "") {
      setErrorMessage("Country code is required");
      return;
    }

    // Validate phone number
    if (phoneNumber === "") {
      setErrorMessage("Phone number is required");
      return;
    } else if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage("Invalid phone number format");
      return;
    }

    // Validate terms and conditions
    if (!acceptTerms) {
      setErrorMessage("Please accept the terms and conditions");
      return;
    }

    // Clear the form fields
    setCountryCode("");
    setPhoneNumber("");
    setAcceptTerms(false);
    setErrorMessage("");

    // Navigate to the next form
    // setActiveForm(activeForm + 1);
  };

  return (
    <div>
      <h2>Form 3</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="countryCode">Country Code:</label>
        <select
          id="countryCode"
          name="countryCode"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          required
        >
          <option value="">Select a country code</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="acceptTerms">
          <input
            type="checkbox"
            id="acceptTerms"
            name="acceptTerms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            required
          />
          Accept Terms and Conditions
        </label>
        <br />
        <br />
        {errorMessage && <div className="error">{errorMessage}</div>}
        <br />
        <button type="submit" name="save">
          Save
        </button>{" "}
        <button type="button" name="saveAndNext" disabled={activeForm === 3}>
          Save and Next
        </button>
      </form>
      <hr />
    </div>
  );
}

export default Form3;
