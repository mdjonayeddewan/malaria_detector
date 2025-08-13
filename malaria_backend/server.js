const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { randomPrediction } = require("./predictor");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// File upload setup
const upload = multer({ dest: "uploads/" });

// Test endpoint
app.get("/", (req, res) => {
  res.send("✅ Malaria backend is running");
});

//Prediction endpoint
app.post("/predict", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No image uploaded" });
  }

  const result = randomPrediction();
  res.json(result);
});

// app.post("/predict", (req, res) => {
//   const result = randomPrediction();
//   res.json(result);
// });


// Start server
app.listen(port, () => {
  console.log(`✅ Malaria backend running on port ${port}`);
});
