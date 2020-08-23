const orm = require("../config/orm");

const burgers = {
    selectAll: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        });
    },
    insertOne: (burger_name) => {
        orm.insertOne(burger_name, (res) => {
            console.log(res);
        });
    },
    updateOne: (id, devoured, cb) => {
        orm.updateOne(devoured, id, (res) => {
            cb(res)
        }) 
    },
    delete: (id, devoured, cb) => {
        orm.delete(id, devoured, cb), (res) => {
            cb(res)
        }
    }
};

module.exports = burgers;

