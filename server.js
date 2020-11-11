const express = require("express");
//What does this do???
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//require model here, but naming?
//const 
const app = express();

//What is this?
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/workout", { useNewUrlParser: true });

//need stuff here??


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})