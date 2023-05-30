const express = require("express");
const bodyParser = require("body-parser");

const Form5 = express();
app.use(bodyParser.json());

app.post("/api/user", (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    address,
    countryCode,
    phoneNumber
  } = req.body;

  res.json({
    message: "Success",
    data: {
      email,
      password,
      firstName,
      lastName,
      address,
      countryCode,
      phoneNumber
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
