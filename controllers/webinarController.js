const { createRegistration } = require("../models/webinarModel");
const resend = require("../config/resend");
const registrationEmail = require("../utils/emailTemplate");

const registerWebinar = async (req, res) => {
  console.log("Request Body:", req.body);

  try {
    const { fullName, email, phone, place } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Save registration to Supabase
    const result = await createRegistration({
      fullName,
      email,
      phone,
      place,
    });

    // Send confirmation email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Webinar Registration Successful",
      html: registrationEmail(fullName),
    });

    return res.status(201).json({
      success: true,
      message: "Registration Successful",
      registrationId: result.id,
    });

  } catch (err) {
    console.error("Registration Error:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
      error: err.code,
    });
  }
};

module.exports = {
  registerWebinar,
};