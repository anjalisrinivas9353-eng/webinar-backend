const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");
const webinarRoutes = require("./routes/webinarRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Webinar Backend Running...");
});

app.use("/api/webinar", webinarRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});