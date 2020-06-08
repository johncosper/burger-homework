var connection = require("../config/connection.js");

var orm = {
	selectAll: function(callback) {
		connection.query('SELECT * FROM burgers', function(err, result) {
			if (err) throw err;
			callback(result);
		});
	},

	insertOne: function(burger_name, callback) {
        connection.query('INSERT INTO burgers SET ?', {	burger_name: burger_name, devoured: false }, 
            function(err, result) {
				if (err) throw err;
				callback(result);
			});	
	},
    
    updateOne: function(ID, callback) {
	    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {ID: ID}],
		    function(err, result) {
			    if (err) throw err;
			    callback(result);
	        });
	}
};

module.exports = orm;