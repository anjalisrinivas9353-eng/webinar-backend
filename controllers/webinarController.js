const { createRegistration } = require("../models/webinarModel");

const registerWebinar = async (req, res) => {
  try {
    const { fullName, email, phone, place } = req.body;

    if (!fullName || !email || !phone || !place) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const result = await createRegistration({
      fullName,
      email,
      phone,
      place,
    });

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      registrationId: result.id,
    });
  } catch (err) {
    console.error("Database Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
      error: err.code,
    });
  }
};

module.exports = {
  registerWebinar,
};