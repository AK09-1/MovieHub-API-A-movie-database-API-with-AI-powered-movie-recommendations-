const OpenAI =  require('openai');
const mongoose = require("mongoose");

const movieRecommendation = async (req, res) => {  
  console.log("####");
  const moviesModel = mongoose.model("movies");
  const allMovies = await moviesModel.find({});
  console.log(allMovies);
  const moviesString = allMovies.map((el) => el.movie_name).join(",");
  const prompt = `I need a movie recommendation based on these movies : ${moviesString}. Provide me with 10 suggestions! seperate movies with comma`;
  console.log(prompt);

  const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

  try {
    const completion = await client.chat.completions.create({     
      model: "gpt-4.1-mini",
      messages:[
        {"role": "user", "content": prompt}],
      max_tokens: 100,
    });
    console.log(completion);

    res.status(200).json({
      suggestions: completion.data.choices[0].text,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      status: "failed",
      message: "Couldnot get recommendations",
    });
    return;
  }
};

module.exports = movieRecommendation;
