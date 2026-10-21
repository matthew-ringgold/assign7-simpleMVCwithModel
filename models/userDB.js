const mysql = require('mysql2');
const conn = mysql.createConnection({
	host: 'localhost',
	user: 'assignDBuser',
	password: 'assignDBpass',
	database: 'assignDB'
});

function getUsers(callback) {
	conn.query(
		'SELECT * FROM users',
		function(err, results){
			if (err) throw err;
			callback(results);
		});
}

function addUser(user, callback) {
	conn.query(
		'INSERT INTO users (fname, lname, username, passwd) VALUES(?, ?, ?, ?)',
		[user.fname, user.lname, user.username, "Password123!"],
		function (err, results) {
			if (err) throw err;
			callback(results);
		}
	);
}

module.exports = { getUsers, addUser };
