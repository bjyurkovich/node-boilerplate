import auth from '../middleware/auth'
import db from '../data/database';

var exp = {};

exp.login = function(req, res){

	var params = {
		email: req.body.email,
		password : req.body.password
	}

	exp._login(req, res, params, function(req, res){

		let token = auth.createToken(params.user);
		console.log(token)
		res.json(200, Object.assign({}, params.user, {token: token}))
		return
	})

}

exp._login = function(req, res, params, done){

	let q = 'SELECT * FROM User WHERE email=? AND password=SHA2(?, 256)';
	db.query(q, [params.email, params.password], (err, rows, fields) => {

		if(!err && rows.length == 1){
			params.user = rows[0];
			return done(req, res, params);
		}else{
			res.json(401, {error: "User not authorized"})
			return
		}
	})

	return null
}


export default exp