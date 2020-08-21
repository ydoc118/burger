const connection = require("./connection");


const orm = {
    selectAll: () => {
        const queryString = `SELECT * FROM burgers;`
        connection.query(queryString, (err, res) => {
            if(err) throw err;
            console.log(res);
        });
    },

    insertOne: (burger_name) => {
        const queryString = `INSERT INTO burgers (burger_name) VALUES (?)`
        connection.query(queryString, [burger_name], (err, result) => {
            if(err) throw err;
            console.log(result);
        }) 
    },

    updateOne: (devoured, burger_name) => {
        const queryString = `UPDATE burgers SET devoured = ? WHERE burger_name = ?`
        connection.query(queryString, [devoured, burger_name], (err, res) => {
            if(err) throw err;
            console.log(res);
        })
    }
};

module.exports = orm;