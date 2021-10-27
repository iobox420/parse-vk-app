import mongoose from "mongoose";
const { Schema, model } = mongoose;

const testModel = model(
  "test",
  new Schema({
    id: { type: String },
    testarr: [{ idf: String }],
  })
);

export default testModel;
