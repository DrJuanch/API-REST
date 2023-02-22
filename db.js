const db = require('mongoose');

db.Promise = global.Promise;
db.set('strictQuery', true)

async function connect (URL) {
  await db.connect(URL,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('[db] connected successfuly'))
    .catch(err => console.error('[db]', err));
};

module.exports = connect;
