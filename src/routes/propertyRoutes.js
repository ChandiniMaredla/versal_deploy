const express = require("express");
const {
  getPropertiesByLocation,
  getPropertiesByUserId,
  updatePropertyStatus,
  getAllProperties,
  getLatestProps,
  insertPropertyRatings,
  getPropertiesByType,
  getPropertyRatings,
  getPropertiesById,
  getProperty
} = require("../controllers/propertyController");

const propertyRoutes = express.Router();

// propertyRoutes.get('/latestprops',getLatestProps);
propertyRoutes.put("/markassold/", updatePropertyStatus);
propertyRoutes.get("/getpropbyid", getPropertiesByUserId);
propertyRoutes.get("/:location", getPropertiesByLocation);
propertyRoutes.get("/getproprating/:propertyId", getPropertyRatings);
propertyRoutes.post("/insertproprating", insertPropertyRatings);
propertyRoutes.get("/getpropbyid/:propertyType/:propertyId", getPropertiesById);
propertyRoutes.get("/getpropbytype/:type", getPropertiesByType);
propertyRoutes.get("/getprop/:propertyType/:userId/:propertyId",getProperty);
module.exports = propertyRoutes;
