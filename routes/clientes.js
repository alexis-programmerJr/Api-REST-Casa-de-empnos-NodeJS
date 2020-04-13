const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');
router.get('/', async (req,res)=> {
    try{
        const clientes = await Cliente.find();
        res.json(clientes);
    }catch(err){
        res.json({message:err})
    }
});
//SUBMITS A POST
router.post('/', (req,res)=> {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        tipo: req.body.nipo,
        numero_telefono: req.body.numero_telefono,
        direccion: req.body.direccion,
        descripcion: req.body.descripcion
    });
    cliente.save()
    .then(data=>{
        res.json(data);
    }).catch(err =>{
       res.json({message:err}) 
    });
});
//SPECIFIC POST
router.get('/:clienteId', async (req,res)=>{
    try{
        const cliente = await Cliente.findById(req.params.clienteId);
        res.json(cliente);
    }catch(err){
        res.json({message: err})
    }
});
//Delete Post
router.delete('/:clienteId', async (req,res)=>{
    try{
        const removeCliente = await Cliente.remove({_id: req.params.clienteId});
        res.json(removeCliente);
    }catch(err){
        res.json({message: err});
    }

});
//Update a post 
router.patch('/:clienteId', async (req,res)=>{
    try{
        const updateCliente = await Cliente.updateOne(
            {_id:req.params.clienteId}
            ,{$set:{
            Nombre:req.body.Nombre,
            Tipo:req.body.Tipo,
            numero_telefono:req.body.numero_telefono,
            direccion:req.body.direccion,
            descripcion:req.body.descripcion
            }}
        );
        res.json(updateCliente);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;