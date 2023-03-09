
let body = document.querySelector("body");
body.style.backgroundColor = ("black")

let header = document.querySelector("h1")
header.innerText = "Awesome Cats";
header.style.color = "red"
header.style.fontSize = "48px";
header.style.textAlign = "center"

let hr1 = document.createElement("hr")
hr1.style.margin = "20px";
header.append(hr1);

let para = document.querySelector("p");
para.style.color = "lightblue";
para.style.margin = "20px";
para.style.padding = "20px";

para.innerText = "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.";

let list = document.querySelector("ul")
list.style.color = "red";

let item13 = document.querySelector("#item-13");
item13.style.opacity = ".5";

let item3 = document.querySelector("#item-3");
item3.innerText = `I say "Hi"`;

let myImage = document.querySelector("img")
myImage.src = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg";
myImage.style.height = "300px"
myImage.style.margin = "20px";
myImage.style.padding = "20px";

let myImage2 = document.querySelector("#myImage-2");
myImage2.src = "https://st2.depositphotos.com/3320817/7635/i/600/depositphotos_76359845-stock-photo-crouching-bengal-kitty-on-black.jpg";
myImage2.style.height = "300px"
myImage2.style.margin = "20px";
myImage2.style.padding = "20px";

let item16 = document.querySelector("#item-16");
item16.className = "item";
item16.innerText = "Won't get fooled again.";

let hr2 = document.createElement("hr")
hr2.style.margin = "20px";
body.append(hr2);
