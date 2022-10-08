require('dotenv').config();

const Server = require('./models/server');

const server = new Server();

server.listen();

// var request = require("request");
// var fs = require("fs");

// var options = {
// 	method: 'POST',
// 	url: "https://api.luxand.cloud/photo/search",
// 	qs: {},
// 	headers: {
// 		'token': "38c466edd5f14894950fa82570c8da5d"
// 	},
// 	formData: { 
// 		//photo: fs.createReadStream('photo.jpg') 
// 		// or use URL 
// 		 photo: 'https://firebasestorage.googleapis.com/v0/b/prueba-438c5.appspot.com/o/images%2Fbianca3.jpg?alt=media&token=73a38573-9907-47e2-8e1a-dbcba4c2430d' 
// 	}
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log(body);
// });
