const express = require("express");
const router = express.Router();

// Route for the home page
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// Route for the Our Services page
router.get("/services", (req, res) => {
  res.sendFile(__dirname + "/views/services.html");
});

// Route for the Contact us page
router.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});

module.exports = router;
