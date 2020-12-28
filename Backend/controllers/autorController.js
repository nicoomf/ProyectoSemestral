'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Autor = require('../modelos/autor.js');

function guardar(req, res) {
    let autor = new Autor()
    autor.nombre = req.body.nombre
    autor.apellido = req.body.apellido
    autor.edad = req.body.edad
    autor.rut = req.body.rut

    autor.save((err, autorStore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ autor: autorStore })

    })
}


function todos(req, res) {

    Autor.find({},(err,autor)=>{
    if(!autor) return res.status(404).send({message:'Error la persona no existe'})

         res.status(200).send({autor})
     })
}
 

module.exports = {
    guardar,
   todos
    
};
