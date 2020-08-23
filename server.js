//Dependencies/PORT
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const exphbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Setting the routes from burgers_controller 
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});
