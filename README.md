# randomCatImagesUsingNODEJS

TheCatApi(https://thecatapi.com/) (credits to API developers.)

Kullanımı:

![randomCat](https://user-images.githubusercontent.com/40924591/175761456-b000ad8d-83c0-4925-b3bd-33666cc56436.png)

```js
const randomImage = require("./main");

const api = new randomImage("apikeyburaya")


async function randomCat(){
    r = await api.getRandomImage()
    console.log(r)
}
randomCat()
```
