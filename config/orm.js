const connection = require("./connection");




const orm = {
    selectAll: (cb) => {
        const queryString = `SELECT * FROM burgers;`
        connection.query(queryString, (err, res) => {
            if(err) throw err;
            cb(res);
        });
    },

    insertOne: (burger_name, cb) => {
        const queryString = `INSERT INTO burgers (burger_name) VALUES (?)`
        connection.query(queryString, [burger_name], (err, res) => {
            if(err) throw err;
            cb(res);
        }) 
    },

    updateOne: (devoured, burger_name, cb) => {
        const queryString = `UPDATE burgers SET devoured = ? WHERE burger_name = ?`
        connection.query(queryString, [devoured, burger_name], (err, res) => {
            if(err) throw err;
            cb(res);
        })
    }
};

module.exports = orm;