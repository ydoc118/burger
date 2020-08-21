const orm = require("../config/orm");

const burgers = {
    selectAll: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        });
    },
    insertOne: (burger_name, cb) => {
        orm.insertOne(burger_name, (res) => {
            cb(res);
        });
    },
    updateOne: (devoured, burger_name, cb) => {
        orm.updateOne(devoured, burger_name, (res) => {
            cb(res)
        }) 
    }
};

module.exports = burgers;

