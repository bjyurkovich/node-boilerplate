//DB stuff
let mysql = require('mysql')
export default mysql.createConnection({
	host: "localhost",
	user : "root",
	password : "coleslaw",
	database : "ExampleDB"
});

