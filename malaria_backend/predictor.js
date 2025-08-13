function randomPrediction() {
  // Randomly select malaria or healthy
  const classes = ["Malaria Parasite Detected", "No Parasite Detected"];
  const prediction = classes[Math.floor(Math.random() * classes.length)];

  // Random confidence between 80% and 99%
  const confidence = (Math.random() * 0.19 + 0.8).toFixed(2);

  return {
    prediction,
    confidence: parseFloat(confidence),
  };
}

module.exports = { randomPrediction };
