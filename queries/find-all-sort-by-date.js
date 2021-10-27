import vkModel from "../models/vk-model.js";

const find = async () => {
  vkModel
    .find({})
    .sort({ date: -1 })
    .then((res) => {
      debugger;
    });
};

export default find;
