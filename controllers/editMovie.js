const mongoose = require("mongoose");
const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const { movie_id, movie_name, info, rating } = req.body;
  if (!movie_id) throw "id is required";
  await moviesModel.updateOne(
    {
      _id: movie_id,
    },
    {
    
      movie_name: movie_name,
      info: info,
      rating: rating,
    },
    {
      runValidators: true, 
    }
  );
  res.status(200).json({
    status: "success",
    message: "movie got updated!",
  });
};

module.exports = editMovie;
