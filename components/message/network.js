const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');

// Here is my routes, request, responses everything about network connection etc..

router.get('/', function (req,res){
  const filterMessages = req.query.user || null;
  controller.getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, messageList, 201)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected error', 500, e);
    })
});
router.post('/', function (req,res){
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'Información invalida', 400, e);
    })
});

router.put('/:id', function (req,res) {
  console.log(req.params.id);

  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(err => {
      response.error(req, res, 'Error interno', 500, err);
    });
})


module.exports = router;
