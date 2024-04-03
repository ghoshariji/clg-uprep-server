const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json())
const Route = require("./routes/routes")
const db = require("./config/dbconfig.js")
const dotenv = require("dotenv")


dotenv.config()

app.use(Route);


app.listen(8000, () => {
    console.log("Server is running...");
})