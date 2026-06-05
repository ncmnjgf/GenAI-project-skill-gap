require("dotenv").config()
const connecteToDB = require("./config/database");
const app = require ("./app");
connecteToDB();

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
})