const orm = require("../config/orm");

orm.selectAll();

orm.insertOne("Mongo Burger");

orm.updateOne(true, "Mongo Burger");