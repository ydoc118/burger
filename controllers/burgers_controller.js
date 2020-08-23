const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll(data => {
        const hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    console.log(req.body)
    burger.insertOne([req.body.burger_name], function(result) {
        res.json({ id: result.insertId })
    });
    
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = req.params.id;
    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        result => {
            
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )
    
});

router.delete("/api/burgers/:id", (req, res) => {
    let condition = req.params.id;
    // console.log(condition)

    burger.delete(condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

module.exports = router;