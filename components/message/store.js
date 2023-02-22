const Model = require('../models/modelMessage');

// Here I want to manage the information, store it, update it, delete it, whatever I want my CRUD

function addMessage(message){
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
};

function getMessages(filterUser){
  return new Promise ((resolve, reject) =>{
    let filter = {};
    if (filterUser !== null){
      filter = {user: filterUser}
    }
    Model.find(filter)
      .populate('user', {
        name: true,
      })//it calls the information from the reference and populate the information
      .exec((error, populated) =>{
        if (error){
          reject(error);
          return false;
        };

        resolve(populated);
      });
  })
};

async function updateText(id, message){
  const foundMessage = await Model.findOne({
    _id: id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage
}

async function removeMessage (id) {
  return await Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage
}
