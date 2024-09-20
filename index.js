const express = require("express");
const userRoutes = require("./controllers/user.js"); // Import user routes

const app = express();

// Use the routes from the user controller
app.use("/api", userRoutes);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
