const express = require("express");

const app = express();

app.use(express.json());

//require all the routes here
const authRouter = require("./routes/auth.routes")

//to access this authRouter you need to add the prefix before using it 
app.use("/api/auth",authRouter)

module.exports = app