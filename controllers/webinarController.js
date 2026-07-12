const { createRegistration } = require("../models/webinarModel");

const registerWebinar = (req, res) => {

  const {
    fullName,
    email,
    phone,
    place,
  } = req.body;

  if (!fullName || !email || !phone || !place) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields.",
    });
  }

  createRegistration(
    {
      fullName,
      email,
      phone,
      place,
    },
    (err, result) => {

      if (err) {
        console.log(err);

        return res.status(500).json({
          success: false,
          message: "Database Error",
        });
      }

      res.status(201).json({
        success: true,
        message: "Registration Successful",
        registrationId: result.insertId,
      });

    }
  );
};

module.exports = {
  registerWebinar,
};