const db = require('mongoose');
const Model = require('../models/model');
// mongodb+srv://administrador:administrador1342**@messages.7rqujqp.mongodb.net/messages?retryWrites=true&w=majority

const URL = 'mongodb+srv://administrador:administrador1342**@messages.7rqujqp.mongodb.net/?retryWrites=true&w=majority'

db.Promise = global.Promise;
db.set('strictQuery', true)


db.connect(URL,{useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => console.log('[db] connected successfuly'))
  .catch(err => console.error('[db]', err));

// Here I want to manage the information, store it, update it, delete it, whatever I want my CRUD

function addMessage(message){
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
};

async function getMessages(filterUser){
  let filter = {};
  if (filterUser !== null){
    filter = {user: filterUser}
  }
  const messages = await Model.find(filter);
  return messages;
};

async function updateText(id, message){
  const foundMessage = await Model.findOne({
    _id: id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  // delete
}
