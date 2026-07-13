const db = require("../config/db");

const createRegistration = async (data) => {
  const query = `
    INSERT INTO webinar_registrations
    (full_name, email, phone, place)
    VALUES ($1, $2, $3, $4)
    RETURNING id;
  `;

  const values = [
    data.fullName,
    data.email,
    data.phone,
    data.place,
  ];

  try {
    console.log("Running SQL query...");

    const result = await db.query(query, values);

    console.log("SQL query completed.");

    return result.rows[0];
  } catch (err) {
    console.error("DATABASE QUERY ERROR:", err);
    throw err;
  }
};

module.exports = {
  createRegistration,
};