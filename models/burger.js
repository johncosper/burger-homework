var orm = require('../config/orm.js');

var burger = {
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },

    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(res) {
            callback(res);
        });
    },

    updateOne: function(ID, callback) {
        orm.updateOne(ID, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;