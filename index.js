const randomImage = require("./main");

const api = new randomImage("apikeyburaya")


async function randomCat(){
    r = await api.getRandomImage()
    console.log(r)
}
randomCat()