const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "koalas_db";

// Middleware
app.use(cors(), express.json(), express.urlencoded({extended:true}));

// Data Base Connection
require("./config/mongoose.config")(DB)

// Connect the routes
require("./routes/notes.routes")(app)

app.listen( PORT, ()=> {
    console.log(`Server up on Port: ${PORT}`)
})
