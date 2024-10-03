const express = require("express");
const { userLoginController, otpForLogin, otpLogin } = require("../controllers/noAuthController");
const { display } = require("../controllers/defaultController");
const { createUser } = require("../controllers/userController");
const {
  getAllProperties,
  resetRatings,
  getLatestProps,
} = require("../controllers/propertyController");
const { getByDistrict } = require("../controllers/fieldController");
const { tePage } = require("../controllers/teLandingPageController");

const noAuthRouter = express.Router();
noAuthRouter.get("/latestprops", getLatestProps);
noAuthRouter.put("/reset", resetRatings);
noAuthRouter.get("/getallprops", getAllProperties);
noAuthRouter.get("/getbydist", getByDistrict);
noAuthRouter.post("/login", userLoginController);
noAuthRouter.post("/create", createUser);

noAuthRouter.get("/hi", display);

noAuthRouter.post("/otp",otpForLogin);
noAuthRouter.post('/verify',otpLogin);

noAuthRouter.get('/tedata',tePage);
module.exports = noAuthRouter;
