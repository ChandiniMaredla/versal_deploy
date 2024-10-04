const bodyParser = require('body-parser'); 
const bcrypt= require('bcrypt');// Replaced ES6 import with CommonJS require
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// const functions = require('firebase-functions'); // Import Firebase Functions


// Replace ES6 imports with CommonJS requires
const userRoutes = require('./src/routes/userRoute');
const wishlistRoutes = require('./src/routes/wishlistRoutes');
const fieldRoutes = require('./src/routes/fieldRoutes');
require('dotenv/config'); // Import environment variables from .env file
const noAuthRouter = require('./src/routes/noAuthRoutes');
const { verifyJwt } = require('./src/services/jwtAuthService'); // Destructure the verifyJwt function from jwtAuthService
const propertyRoutes = require('./src/routes/propertyRoutes');
const agentRoutes = require('./src/routes/agentRoutes');
const residentialRoutes= require('./src/routes/residentialRoutes');
const commercialRoutes = require('./src/routes/commercialRoutes');
const bookingRoutes = require('./src/routes/bookingRoutes');
const errorHandler = require("./src/services/errorHandler");
const locationRoutes = require('./src/routes/locationRoutes');
const layoutRoutes = require('./src/routes/layoutRoutes');


const app = express();

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.options('*', cors());
app.use(bodyParser.json());
app.use('/', noAuthRouter);
app.use('/users', verifyJwt, userRoutes);
app.use('/wishlist',verifyJwt, wishlistRoutes);
app.use('/fields', verifyJwt, fieldRoutes);
app.use('/property',verifyJwt,propertyRoutes);
app.use('/agent',verifyJwt,agentRoutes);
app.use('/residential',verifyJwt,residentialRoutes);
app.use('/commercials',verifyJwt,commercialRoutes);
app.use('/booking',verifyJwt,bookingRoutes);
app.use('/location',locationRoutes);
app.use('/layout',verifyJwt,layoutRoutes);
app.use(errorHandler);
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('DB Connected');
    app.listen(3002, () => {
      console.log('Server started on port 3002');
    });
  })
  .catch((e) => {
    console.log(e);
  });
// Export the Express app as a Firebase Function
// exports.api = functions.https.onRequest(app);