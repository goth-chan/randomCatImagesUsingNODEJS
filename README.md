# randomCatImagesUsingNODEJS

TheCatApi(https://thecatapi.com/) (credits to API developers.)

Kullanımı:

![randomCat](https://user-images.githubusercontent.com/40924591/175761456-b000ad8d-83c0-4925-b3bd-33666cc56436.png)

``js
const ApiWrapperMain = require("./main");

const apiwrapper = new ApiWrapperMain("key")


async function f(){
    r = await apiwrapper.getRandomImage()
    console.log(r)
}
f()
````
