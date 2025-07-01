const express = require("express");
const app = express();
const PORT = 5000;
const mysql = require("mysql2");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "registrationForm",
});

// Connect
connection.connect((err) => {
  if (err) {
    console.error("Error connecting:", err);
    return;
  }
  console.log("Connected!");
});

// Example route
app.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM registrationForm.user_details",
    (err, results) => {
      if (err) {
        console.error("Query error:", err);
        res.status(500).send("Database error");
        return;
      }
      res.status(200);
      res.json(results);
    }
  );
});

app.post("/register", (req, res) => {
  try {
    const {
      fullName,
      userName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      gender,
    } = req.body;

    // Simple validation
    if (
      !fullName ||
      !userName ||
      !email ||
      !phoneNumber ||
      !password ||
      !confirmPassword ||
      !gender
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Insert into DB
    const sql = `
        INSERT INTO registrationForm.user_details 
        (fullName, userName, email, phoneNumber, password, confirmPassword, gender) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

    connection.query(
      sql,
      [
        fullName,
        userName,
        email,
        phoneNumber,
        password,
        confirmPassword,
        gender,
      ],
      (err, result) => {
        if (err) {
          console.error("Error inserting user:", err);
          return res.status(500).send("Error saving user");
        }
        console.log("User inserted with ID:", result.insertId);
        res.status(200).json({
          message: "Registration successful",
          userId: result.insertId,
        });
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).send("Unexpected server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
