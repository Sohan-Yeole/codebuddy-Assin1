// form which not show results beacuse
//our api is not get a data here

import React, { useState } from "react";

function Form4({ activeForm, setActiveForm }) {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [apiResponse, setApiResponse] = useState(null);

  const countries = [
    { code: "+91", name: "India" },
    { code: "+1", name: "America" }
  ];

  const validatePhoneNumber = (number) => {
    const pattern = /^\d{10}$/;
    return pattern.test(number);
  };

  const handleSubmit = async (e) => {
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

    // Prepare the request payload
    const payload = {
      emailId: "john.doe@gmail.com",
      password: "QWerty##11",
      firstName: "John",
      lastName: "Doe",
      address: "22/B, Baker Street, London - 10089",
      countryCode,
      phoneNumber
    };

    try {
      // Make the API request
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      // Parse the response
      const data = await response.json();

      if (response.ok) {
        // Request was successful
        setApiResponse(data);
      } else {
        // Request failed
        setErrorMessage(data.message);
      }
    } catch (error) {
      // Request error
      setErrorMessage("An error occurred while processing the request");
    }
  };

  return (
    <div>
      <h2>Form 3</h2>
      <form onSubmit={handleSubmit}>
        {errorMessage && <div className="error">{errorMessage}</div>}
        {apiResponse && (
          <div className="response">
            <p>{apiResponse.message}</p>
            <p>Email: {apiResponse.data.emailId}</p>
            <p>Password: {apiResponse.data.password}</p>
            <p>First Name: {apiResponse.data.firstName}</p>
            <p>Last Name: {apiResponse.data.lastName}</p>
            <p>Address: {apiResponse.data.address}</p>
            <p>Country Code: {apiResponse.data.countryCode}</p>
            <p>Phone Number: {apiResponse.data.phoneNumber}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form4;
