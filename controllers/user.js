const express = require("express");
const router = express.Router(); // Create an Express Router

// Define the "/user" route
router.route("/user").get((req, res) => {
  res.json({
    name: "Sagar",
    city: "Datia",
  });
});

module.exports = router; // Export the router to use it in index.js
