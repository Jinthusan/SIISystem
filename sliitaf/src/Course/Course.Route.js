const express=require('express');
var router=express.Router();
var Controller=require('./Course.Controller');

router.post('/add',(req,res)=>{
    Controller.insert(req.body).then(data=>{
        res.status(data.status).send({message:data.message});
    }).catch(err=>{
        res.status(err.status).send({message:err.message});
    });
});

router.route('/all').get(function(req,res){
    Controller.searchAll().then(data=>{
        res.status(data.status).send(data.data);
    }).catch(err=>{
        res.status(err.status).send({message:err.message})
    })
});

router.get('/:id', (req, res) => {
    Controller.search(req.params.id).then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

router.put('/:id', (req, res) => {
    Controller.update(req.params.id, req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});
module.exports=router;