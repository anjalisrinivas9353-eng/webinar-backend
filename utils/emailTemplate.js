const registrationEmail = (name) => {
  return `
    <div style="font-family:Arial,sans-serif;padding:20px;">
      <h2>🎉 Registration Successful</h2>

      <p>Hello <b>${name}</b>,</p>

      <p>
        Thank you for registering for our Wealthoria Webinar.
      </p>

      <p>
        Your registration has been received successfully.
      </p>

      <p>
        To confirm your seat, please complete the payment.
      </p>

      <br>

      <p>Regards,</p>

      <h3>Wealthoria Team</h3>
    </div>
  `;
};

module.exports = registrationEmail;