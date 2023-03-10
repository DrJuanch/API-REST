const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');

router.post('/', function (req, res) {
  controller.addUser(req.body.name)
    .then(data=>{
      response.success(req, res, data, 201)
    })
    .catch(err =>{
      response.error(req,res, 'Internal error', 500, err);
    });
});

router.get('/', function (req, res){
  const filterUser = req.query.name || null;
  controller.listUsers(filterUser)
    .then(usersList => {
      response.success(req, res, usersList, 200);
    })
    .catch(err => {
      response.error(req, res, 'Internal error', 500, err);
    });
});

module.exports = router;
