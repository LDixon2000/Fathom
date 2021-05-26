const getJoke = require("../model/appModel.js");

module.exports = async () => {
  //const randomIndex = Math.floor(Math.random() * 386) + 1;
  //console.log(randomIndex);
  const joke = await getJoke();
  return joke;
};
