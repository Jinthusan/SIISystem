const express=require('express');
var router=express.Router();
var Controller=require('./AssignmentUpload.Controller');

router.post('/add',(req,res)=>{
    Controller.insert(req.body).then(data=>{
        res.status(data.status).send({message:data.message});
    }).catch(err=>{
        res.status(err.status).send({message:err.message});
    });
});

router.get('/all',(req,res)=>{
    Controller.searchAll().then(data=>{
        res.status(data.status).send({message:data.data});
    }).catch(err=>{
        res.status(err.status).send({message:err.message});
    });
});

module.exports=router;