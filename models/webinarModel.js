const db = require("../config/db");

const createRegistration = (data, callback) => {
  const sql = `
    INSERT INTO webinar_registrations
    (full_name, email, phone, place)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.fullName,
      data.email,
      data.phone,
      data.place,
    ],
    callback
  );
};

module.exports = {
  createRegistration,
};