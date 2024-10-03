// Define schema for locations collection

const mongoose = require("mongoose");

const teLandingPageSchema = new mongoose.Schema({
  images: [String],
  price: String,
  size: String,
  title: String,
  district: String,
});

// Create a model
const teLandingPageModel = mongoose.model("teLandingPage", teLandingPageSchema);

module.exports = teLandingPageModel;
