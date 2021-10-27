import mongoose from "mongoose";
import config from "./config.js";

async function start() {
  try {
    console.log("Start connect to mongo DB");
    await mongoose.connect(config.MongoDbConnectionDriverCode, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (e) {
    console.log("Server start error");
    console.log(e);
  }
}

export default start;
