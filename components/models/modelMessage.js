const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: 'User'
    },
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
