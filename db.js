const db = require('mongoose');

db.Promise = global.Promise;
db.set('strictQuery', true)

async function connect () {
  const MONGO_URI= process.env.MONGO_URI;
  await db.connect(MONGO_URI,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('[db] connected successfuly'))
    .catch(err => console.error('[db]', err));
};

module.exports = connect;
