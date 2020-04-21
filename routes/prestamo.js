const express = require('express');
const router = express.Router();
const Prestamo = require('../models/prestamo');
router.get('/', async (req,res)=> {
    try{
        const prestamo = await Prestamo.find();
        res.json(prestamo);
    }catch(err){
        res.json({message:err})
    }
});
//SUBMITS A POST
router.post('/', (req,res)=> {
    const prestamo = new Prestamo({
        folio: req.body.folio,
        tipo: req.body.tipo,
        estatus: req.body.estatus,
        id_cliente: req.body.id_cliente,
        descripcion: req.body.descripcion,
        estatus: 'Activo'
    });
    prestamo.save()
    .then(data=>{
        res.json(data);
    }).catch(err =>{
       res.json({message:err}) 
    });
});
//Buscar por folio
router.get('/:prestamoFolio', async (req,res)=>{
    try{
        const usuario = await Usuario.findOne({'folio':req.params.folio});
        res.json(usuario);
    }catch(err){
        res.json({message: err})
    }
});
//SPECIFIC POST
router.get('/:prestamoId', async (req,res)=>{
    try{
        const prestamo = await Prestamo.findById(req.params.prestamoId);
        res.json(prestamo);
    }catch(err){
        res.json({message: err})
    }
});
//Delete Post
router.delete('/:prestamoId', async (req,res)=>{
    try{
        const removePrestamo= await Prestamo.remove({_id: req.params.prestamoId});
        res.json(removePrestamo);
    }catch(err){
        res.json({message: err});
    }

});
//Update a post 
router.patch('/:prestamoId', async (req,res)=>{
    try{
        const updatePrestamo = await Prestamo.updateOne(
            {_id:req.params.prestamoId}
            ,{$set:{
            estatus:req.body.direccion,
            descripcion:req.body.descripcion
            }}
        );
        res.json(updatePrestamo);
    }catch(err){
        res.json({message: err});
    }
})
module.exports = router;