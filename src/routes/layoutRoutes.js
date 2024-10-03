const express = require("express");
const {
  insertLayoutDetails,
  getLayouts,
  getAllLayouts,
  updateplots,
} = require("../controllers/layoutController");

const layoutRoutes = express.Router();

layoutRoutes.get("/getlayouts", getLayouts);
layoutRoutes.post("/insert", insertLayoutDetails);
layoutRoutes.get("/getalllayouts", getAllLayouts);
layoutRoutes.put("/update", updateplots);

module.exports = layoutRoutes;
