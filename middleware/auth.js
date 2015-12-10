import jwt from 'jwt-simple'
import moment from 'moment'


import db from '../data/database';

const jwtTokenSecret = 'mysupersecretMStoken';

export default {

	jwtAuth: function(req, res, next){

		let token = (req.body && req.body.access_token) || req.query.access_token || req.headers["x-access-token"];

		req.authType = 'jwt';

		if(token){
			try{
				
				
				var decoded = jwt.decode(token, jwtTokenSecret);
				

				decoded.exp <= Date.now() ? res.status(401).json({error: 'Token expired'}) : null;



				let q = 'SELECT * FROM User WHERE id=?';
				db.query(q, decoded.iss, (err, rows, fields) => {
					!err && rows.length == 1 ? req.user = rows[0] : res.status(401, {error: 'Not Authorized', initiator: 'jwtAuth'});
					return next();
				})

			}catch (err) {

				console.log(err)

				res.status(401).json({error:'Bad token'})
				return;
			}
		}else{
			res.status(401, {error: 'Token missing'});
			return;
		}
	},

	createToken: (user) => {

		console.log(user)

		let expires = moment().add(7, 'days').valueOf();
		let token = jwt.encode({
			iss: user.id,
			exp: expires
		}, jwtTokenSecret)

		return token;
	}

}