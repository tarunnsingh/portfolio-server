const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  email: {
    type: String,
    min: 3,
    required: true,
  },
  msgBody: {
    type: String,
    min: 2,
    required: true,
  },
  timestamp: {
    type: Date,
  },
});

module.exports = messageSchema;
