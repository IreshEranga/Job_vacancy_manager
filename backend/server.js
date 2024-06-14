require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


const vacancyRoutes = require("./routes/vacancyRoutes");


// express app
const app = express();


const PORT = process.env.PORT || 8001;
// middleware
app.use(express.json());

// Parse JSON requests
app.use(bodyParser.json()); 

// cors
app.use(cors());


//routes

app.use("/api",vacancyRoutes);

// connect to db
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Connected to mongodb database");
  // listen to port
  // app.listen(process.env.PORT, () => {
  //   console.log("listening for requests on port", process.env.PORT);
  // });
  app.listen(PORT, () => {
    console.log(`listening for requests on port ${PORT}`)
  })
})
.catch((err) => {
  console.log(err);
});