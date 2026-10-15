// 1
let h2 = document.createElement("h2");
h2.textContent = "Mano pirmasis elementas";
document.getElementById("root").appendChild(h2);

// 2
let p = document.createElement("p");
p.textContent = "cats.";
document.getElementById("root").appendChild(p);

// 3
let div = document.createElement("div");
div.style.width = "300px";
div.style.height = "100px";
div.style.backgroundColor = "yellow";
document.getElementById("root").appendChild(div);

// 4
let button = document.createElement("button");
button.textContent = "Spausti";
document.getElementById("root").appendChild(button);

// 5
let img = document.createElement("img");
img.setAttribute("src", "https://lumenor.ai/cdn-cgi/imagedelivery/F5KOmplEz0rStV2qDKhYag/83677e77-65a5-4c55-b01a-a90ab1cea300/tn");
img.setAttribute("alt", "Paveikslėlis");
document.getElementById("root").appendChild(img);

// 6
let a = document.createElement("a");
a.textContent = "Apsilankyti svetainėje";
a.setAttribute("href", "https://www.google.com");
document.getElementById("root").appendChild(a);

// 7
let div2 = document.createElement("div");
div2.textContent = "Sveiki!";
div2.style.width = "200px";
div2.style.height = "50px";
div2.style.backgroundColor = "blue";
div2.style.color = "white";
document.getElementById("root").appendChild(div2);

// 8
let p1 = document.createElement("p");
p1.textContent = "Pirmasis tekstas";
p1.style.color = "red";
document.getElementById("root").appendChild(p1);

let p2 = document.createElement("p");
p2.textContent = "Antrasis tekstas";
p2.style.color = "green";
document.getElementById("root").appendChild(p2);

let p3 = document.createElement("p");
p3.textContent = "Trečiasis tekstas";
p3.style.color = "blue";
document.getElementById("root").appendChild(p3);
