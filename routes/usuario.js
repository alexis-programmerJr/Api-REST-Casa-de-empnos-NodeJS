const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
router.get('/', async (req,res)=> {
    try{
        const usuarios = await Usuario.find();
        res.json(usuarios);
    }catch(err){
        res.json({message:err})
    }
});
//SUBMITS A POST
router.post('/', (req,res)=> {
    const usuario = new Usuario({
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        contrasena: req.body.estatus,
    });
    usuario.save()
    .then(data=>{
        res.json(data);
    }).catch(err =>{
       res.json({message:err}) 
    });
});
//SPECIFIC POST
router.get('/:usuarioId', async (req,res)=>{
    try{
        const usuario = await Usuario.findById(req.params.usuarioId);
        res.json(usuario);
    }catch(err){
        res.json({message: err})
    }
});
//Delete Post
router.delete('/:usuarioId', async (req,res)=>{
    try{
        const removeUsuario = await Usuario.remove({_id: req.params.usuarioId});
        res.json(removeUsuario);
    }catch(err){
        res.json({message: err});
    }

});
//Update a post 
router.patch('/:usuarioId', async (req,res)=>{
    try{
        const updateUsuario = await Usuario.updateOne(
            {_id:req.params.usuarioId}
            ,{$set:{
            nombre:req.body.nombre,
            contrasena:req.body.contrasena,
            tipo:req.body.tipo,
            }}
        );
        res.json(updateUsuario);
    }catch(err){
        res.json({message: err});
    }
})
module.exports = router;