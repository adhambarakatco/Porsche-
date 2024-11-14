const https = require('https');
const fs = require('fs');
const express=require('express');
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoute');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const userControllers = require('./controllers/userControllers.js');
const cors = require('cors');
const adminRoute = require('./routes/adminRoute');
const authenticationMiddleware=require("./middleware/authenticationMiddleware")
const orderRoute = require('./routes/orderRoute');

const app = express();

//New code
app.options('*', cors());

app.use(cors({
    origin: 'http://localhost:3000', // replace with the origin of your frontend
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


connectDB();

const port = process.env.PORT || 5000;
app.use("/api/v1", userRoute);
app.use(authenticationMiddleware)
app.use("/api/v1", adminRoute);
app.use("/api/v1", orderRoute);

 // const options = {
 //     key: fs.readFileSync('C:\\Users\\M-EMAD\\WebstormProjects\\Recent_Test_Sample\\Frontend\\frontend\\key.pem'),
 //     cert: fs.readFileSync('C:\\Users\\M-EMAD\\WebstormProjects\\Recent_Test_Sample\\Frontend\\frontend\\cert.pem')
 // };

 // https.createServer(options, app).listen(5000, () => {
 //     console.log('HTTPS server running on port 5000');
 // });


  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  });


