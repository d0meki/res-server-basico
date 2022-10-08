const { response, request } = require('express')
const solicitud = require("request");
const fs = require("fs");
const algoGet = (req = request,res = response) =>{

    const query = req.query;
    //tambien podemos desestructurar
    //const {q,nombre = 'No Name',apiKey} =req.query;

    res.json({
        msg:'get API - Controlador',
        query
    })
}

const algoPut = (req,res = response) =>{
    //res.send('hello World');

    const id = req.params.id;

    res.json({
        msg:'put API - Controlador',
        id
    })
}
const algoPost = (req,res = response) =>{
    //res.send('hello World');
   // const body = req.body;
    //podemos desustructurar
    const { url } = req.body;
    const options = {
        method: 'POST',
        url: "https://api.luxand.cloud/photo/search",
        qs: {},
        headers: {
            'token': process.env.API_TOKEN
        },
        formData: { 
            //photo: fs.createReadStream('photo.jpg') 
            // or use URL 
             photo: url 
        }
    };
    solicitud(options, function (error, response, body) {
        //if (error) throw new Error(error);
        res.json({
            msg:'post API - Controlador',
            body
        })
        //console.log(body);
    });  
}
const algoDelete = (req,res = response) =>{
    //res.send('hello World');
    res.json({
        msg:'delete API - Controlador'
    })
}
module.exports = {
    algoGet,
    algoPost,
    algoPut,
    algoDelete
}