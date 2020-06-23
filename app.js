const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const authRouter = require("./routes/auth");
const messageRouter = require("./routes/message.js");
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

mongoose.connect(
  process.env.MONGO_DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB Connected");
  }
);

app.use("/api/user", authRouter);
app.use("/api/message", messageRouter);

app.listen(PORT, () => {
  console.log(`Server running at Port ${PORT}`);
});
