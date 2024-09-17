import hello from "./hello";
import world from "./world";
import img from "./images/S__30220334.jpg";

import "./css/index.scss";

console.log(img);
console.log(hello + world);

// create a img and insert into body
var oImg = document.createElement("img");
oImg.src = img;
document.body.appendChild(oImg);
