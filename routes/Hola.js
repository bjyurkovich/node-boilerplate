export default class Hola{

	static sayHelloInMexican(req, res){
		let params = {
			name: req.params.name
		}
		res.json(Hola._sayHelloInMexican(req, res, params))
	}


	static _sayHelloInMexican(req, res, params){
		return {response: `Hi, ${params.name}!`}
	}


}