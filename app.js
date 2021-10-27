import fetch from "node-fetch";
import vkModel from "./models/vk-model.js";
import startConnectionToDB from "./start.js";
import testModel from "./models/test-model.js";
import ApiError from "./exceptions/api-error.js";
import find from "./queries/find-all-sort-by-date.js";

const vkuri = (obj) => {
  const token =
    "111b9e1415d99a8db0fce0d57c44c85742205f90a46552f696ef57e8a76295d8a0c4b61843a82dd40d338";

  return `https://api.vk.com/method/${obj.method}?domain=${obj.domain}&offset=${obj.offset}&count=${obj.count}&filter=${obj.filter}&extended=${obj.extended}&v=${obj.v}&access_token=${token}`;
};

const fetchfunc = async (offset) => {
  console.log("start fetch");
  await fetch(
    vkuri({
      method: "wall.get",
      domain: "moshenniki74",
      offset: offset,
      count: 50,
      filter: "owner",
      extended: 1,
      v: 5.131,
    })
  )
    .then((r) => {
      return r.json();
    })
    .then((res) => {
      if (res.response.items !== undefined) {
        let temp = res.response.items;
        debugger;
        if (temp.length === 0) {
          throw ApiError.ArrayEnd();
        }

        temp.forEach(async (cur, is) => {
          await vkModel
            .create(cur)
            .then((r) => console.log(is, "end save to db"))
            .catch((error) => {
              console.log(error);
            });
        });
      }
    });
  console.log("start end");
};

const main = async () => {
  await startConnectionToDB();
  /*await find();*/
  for (let i = 0; i < 1000; i = i + 50) {
    setTimeout(async () => {
      /*

      */

      await fetchfunc(i);

      /*

      */
    }, 3000);
  }
};

main();
