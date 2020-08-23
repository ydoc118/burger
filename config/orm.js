const connection = require("./connection");

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }

const orm = {
    selectAll: (cb) => {
        const queryString = `SELECT * FROM burgers`;
        connection.query(queryString, (err, res) => {
            if(err) throw err;
            cb(res);
        });
    },

    insertOne: (burger_name, cb) => {
        const queryString = `INSERT INTO burgers (burger_name) VALUES (?);`
        // console.log(burger_name)
        connection.query(queryString, [burger_name], (err, res) => {
            if(err) throw err;
            cb(res);
        }) 
    },

    updateOne: (id, devoured, cb) => {
        devoured = objToSql(devoured)
        const queryString = `UPDATE burgers SET ` + devoured + ` WHERE id = ` + id + `;`
        connection.query(queryString, (err, res) => {
            if(err) throw err;
            cb(res);
        })
    },

    delete: (condition, cb) => {
        const queryString = `DELETE FROM burgers WHERE id = ` + condition + `;`
        // console.log(condition);
        connection.query(queryString, (err, res) => {
            if(err) throw err;
            cb(res)
        })
    }
};

module.exports = orm;