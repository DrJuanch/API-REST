const store = require('./store');

// Here we want to control the body send by user and define what to do with it

function addMessage(user, message){
  return new Promise((resolve, reject) => {
    if (!user || !message){
      reject('Datos invalidos');
    };

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
};

function updateMessage(id, message){
  return new Promise(async (resolve, reject) => {
    if(!id || !message){
      reject('Invalid data');
    };
    const result = await store.updateText(id, message);
    resolve(result);
  });
};

function deleteMessage(id) {
  return new Promise ((resolve, reject) => {
    if (!id){
      reject ('Id invalido');
    }else{
      store.remove(id)
        .then(() => {
          resolve();
        })
        .catch(e => {
          reject(e);
        });
    }
  });
};

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
