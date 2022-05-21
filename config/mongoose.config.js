const mongoose = require("mongoose");

//alt way

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
    .then( () => console.log(`connected to ${DB} database`))
    .catch( err => console.log("cannot connect to DB", err))
} 