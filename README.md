# MovieHub-API-A-movie-database-API-with-AI-powered-movie-recommendations-
Developed a full-stack RESTful API for managing movie data using Node.js, Express.js, and MongoDB with Mongoose ODM, implementing complete CRUD functionality. Integrated OpenAI’s GPT model to deliver AI-driven personalized movie recommendations based on user input. Followed MVC architecture principles to ensure scalability and maintainability.
# 🎬 Movies and Recommendations CRUD App

A full **CRUD (Create, Read, Update, Delete)** application for managing movies and obtaining **AI-powered movie recommendations**.  
Built with **Node.js, MongoDB, and Mongoose ODM**, and integrated with **OpenAI's ChatGPT** for intelligent movie suggestions.

---

## 📑 Table of Contents
- [Features](#Features)
- [Tech Stack](#Tech-Stack)
- [Installation](#Installation)
- [Usage](#Usage)
- [API Endpoints](#api-endpoints)
- [OpenAI Integration](#openai-integration)
- [License](#license)

---

## ✨ **Features**
- Create, Read, Update, and Delete movies.
- Get movie recommendations using **OpenAI's ChatGPT**.
- RESTful API structure for easy integration with any frontend or mobile app.

---

## 🛠 **Tech Stack**
- **Node.js** – Backend runtime
- **Express.js** – Server framework
- **MongoDB** – Database
- **Mongoose ODM** – Object Data Modeling
- **OpenAI (ChatGPT)** – AI-based movie recommendations

---

## 🚀 **Installation**

 ### 1. **Clone Repository**

 ### 2. **Install dependencies**

- npm install
### 3. **Configure MongoDB**

- **Ensure MongoDB is installed on your machine.**
- **Update the MongoDB connection string.**
  
### 4. **Set up OpenAI API Key**

- **Get your OpenAI API key.**
- **Update the API key.**

---

## **Usage**

1. **Start the server:**

- **npm start*

 2. **Visit http://localhost:8000 in your browser to access the application.**

---

## **API Endpoints**

- **GET /movies:** Get all movies.
- **GET /movies/:id:** Get a specific movie.
- **POST /movies:** Create a new movie.
- **PATCH /movies/:id:** Update a movie.
- **DELETE /movies/:id:** Delete a movie.

---

## **OpenAI Integration**

**The application integrates with OpenAI's ChatGPT for movie recommendations. Ensure your OpenAI API key is set up.**

---

## **License**

**This project is licensed under the MIT License - see the LICENSE file for details.**
