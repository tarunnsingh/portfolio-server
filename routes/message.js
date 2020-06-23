const express = require("express");
const router = express.Router();
const messageSchema = require("../models/Message");
const mongoose = require("mongoose");

router.post("/newmessage", (req, res) => {
  const { email, msgBody } = req.body.message;
  const Message = mongoose.model("Message", messageSchema);
  const toSaveMessage = new Message({
    email,
    msgBody,
    timestamp: Date.now(),
  });

  toSaveMessage.save((err) => {
    if (err) {
      console.log("Error in Saving Mesage to DB", err);
      res.status(400).json({ sent: false, error: err });
    } else {
      res.status(200).json({ sent: true, error: false });
    }
  });
});

module.exports = router;
