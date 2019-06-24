const express=require('express');
var router=express.Router();
var Controller=require('./Login.Controller');

router.get('/:email/:password', (req, res) => {
    Controller.search(req.params.email,req.params.password).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

module.exports=router;