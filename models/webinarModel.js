const db = require("../config/db");

console.log("Imported DB =", db);
console.log("Type of db =", typeof db);
console.log("Type of db.query =", typeof db.query);

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

  const result = await db.query(query, values);

  return result.rows[0];
};

module.exports = {
  createRegistration,
};