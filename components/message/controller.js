const store = require('./store');

// Here we want to control the body send by user and define what to do with it

function addMessage(user, message){
  return new Promise((resolve, reject) => {
    if (!user || !message){
      console.error('[messageController] No hay usuario o mensaje');
      reject('Datos incompletos');
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date()
    };

    store.add(fullMessage);
    resolve(fullMessage);
  });
};

function getMessages(filterUser){
  return new Promise ((resolve) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message){
  return new Promise(async (resolve, reject) => {
    if(!id || !message){
      reject('Invalid data')
    };
    const result = await store.updateText(id, message);
    resolve(result);
  });
}


module.exports = {
  addMessage,
  getMessages,
  updateMessage
};
