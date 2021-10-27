import fetch from "node-fetch";
import vkModel from "./models/vk-model.js";
import startConnectionToDB from "./start.js";
import testModel from "./models/test-model.js";
import ApiError from "./exceptions/api-error.js";

const vkuri = (obj) => {
  const token =
    "111b9e1415d99a8db0fce0d57c44c85742205f90a46552f696ef57e8a76295d8a0c4b61843a82dd40d338";

  return `https://api.vk.com/method/${obj.method}?domain=${obj.domain}&offset=${obj.offset}&count=${obj.count}&filter=${obj.filter}&extended=${obj.extended}&v=${obj.v}&access_token=${token}`;
};

const main = async () => {
  /*  await startConnectionToDB();*/




  for (let i = 0; i < 5; i++) {
    setTimeout(() => {

      fetch(
          vkuri({
            method: "wall.get",
            domain: "moshenniki74",
            offset: 10000,
            count: 3,
            filter: "owner",
            extended: 1,
            v: 5.131,
          })
      )
          .then((r) => {
            return r.json();
          })
          .then((res) => {
            let temp = res.response.items;

            if (temp.length === 0) {
              throw ApiError.ArrayEnd();
            }

            temp.forEach((cur, i) => {
              vkModel
                  .create(cur)
                  .then((r) => console.log(r))
                  .catch((error) => {
                    console.log(error);
                  });
            });
          });
    },1000)
  }
};




main();
/*
fetch(
    `https://api.vk.com/method/wall.get?domain=moshenniki74&count=100&filter=owner&extended=1&v=5.131&access_token=111b9e1415d99a8db0fce0d57c44c85742205f90a46552f696ef57e8a76295d8a0c4b61843a82dd40d338`
)*/
