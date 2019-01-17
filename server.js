const express = require("express");
const logger = require("morgan")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
//Required Routes
const items = require("./routes/api/items")

const app = express();

//Bodyparser Middelware
app.use(bodyParser.json());
//Logger - help with debugging
app.use(logger('dev'));


//DB Config and Connection
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, {useNewUrlParser : true})
  .then(() => console.log("SUCCESSFUL MONGODB CONNECTION") )
  .catch(err => console.log(err));

// ##Add routing here:
app.use("/api/items", items, () => console.log("server routing requested"))

//Port info
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`));



