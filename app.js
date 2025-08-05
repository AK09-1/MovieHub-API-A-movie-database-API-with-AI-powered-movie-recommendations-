require("express-async-errors");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const addMovie = require("./controllers/addMovie");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");
const movieRecommendation = require("./controllers/movieRecommendation");
const errorHandler = require("./handlers/errorHandler");

//Connection to MDB DB
mongoose
  .connect(process.env.mongo_connection, {}) 
  .then(() => {
    console.log("Connection to MongoDB successfull!!");
  })
  .catch(() => {
    console.log(
      process.env.mongo_connection + " Connection to MongoDB failed!!"
    );
  });

const app = express(); 
app.use(express.json());


require("./models/movies.model");


app.post(
  "/api/movies",
  addMovie 
);
//GetAll
app.get("/api/movies", getAllMovies);
//GetOne
app.get("/api/movies/:movie_id", getSingleMovie);
//Edit/update
app.patch("/api/movies", editMovie);
//delete
app.delete("/api/movies/:movie_id", deleteMovie);

//Openai Suggestions
app.get("/api/movies/openai/getRecommendation", movieRecommendation);

//errorhandler under routes
app.use(errorHandler);

//Server listenening
app.listen(8000, () => {
  console.log("server listening!");
});
