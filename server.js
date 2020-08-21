//Dependencies/PORT
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const orm = require("./config/orm");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting up Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Setting the routes from burgers_controller 
var routes = require("./controllers/burgers_controller.js");

// app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});

orm.selectAll();

orm.insertOne("Mongo Burger");

// orm.updateOne(true, "Mongo Burger");