const mongoose = require("mongoose");

const addMovie = async (req, res) => {  
  const moviesModel = mongoose.model("movies");  
  const { movie_name, info, rating } = req.body;  
  if (!info) throw "info must be provided";
  if (!rating) throw "Rating must be provided";
  if (rating < 1 || rating > 10) throw "Rating must be between 1 and 10"; 

  const createMovie = await moviesModel.create({   
    movie_name: movie_name,
    info: info,
    rating: rating,
  });
  console.log(createMovie);
    res.status(200).json({
    status: "success",
    message: "Movie added successfulyy",    
  });
};
module.exports = addMovie;