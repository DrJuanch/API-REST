const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema(
  {
    user: String,
    message: {
      type: String,
      require: true
    },
    date: Date
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('Message', mySchema);
module.exports = model;
