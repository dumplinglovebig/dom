const root = document.getElementById("root");

// 1
let h1 = document.createElement("h1");
h1.textContent = "Mano pirmasis elementas";
root.appendChild(h1);

// 2
let div = document.createElement("div");
let p = document.createElement("p");
p.textContent = "Pastraipa div viduje";
div.appendChild(p);
root.appendChild(div);

// 3
div.classList.add("myClass");
div.id = "myId";

let a = document.createElement("a");
a.href = "https://www.google.com";
a.textContent = "Google";
root.appendChild(a);

let img = document.createElement("img");
img.src = "image.jpg";
img.alt = "Paveikslėlis";
img.style.width = "100px";
root.appendChild(img);

// 4
let div2 = document.createElement("div");
root.appendChild(div2);

for (let i = 1; i <= 6; i++) {
    let pastraipa = document.createElement("p");
    pastraipa.textContent = "Pastraipa " + i;

    if (i % 2 === 0) {
        pastraipa.style.color = "red";
        pastraipa.style.backgroundColor = "black";
    } else {
        pastraipa.style.color = "white";
        pastraipa.style.backgroundColor = "green";
    }

    div2.appendChild(pastraipa);
}

// 5
let input = document.createElement("input");
input.placeholder = "Įrašyk tekstą";
root.appendChild(input);

let rodyti = document.createElement("button");
rodyti.textContent = "Rodyti tekstą";
root.appendChild(rodyti);

let rezultatas = document.createElement("p");
root.appendChild(rezultatas);

rodyti.onclick = function () {
    console.log(input.value);
    rezultatas.textContent = input.value;
};

// 6
let sukurti = document.createElement("button");
sukurti.textContent = "Sukurti elementą";
sukurti.style.backgroundColor = "green";
sukurti.style.color = "white";
root.appendChild(sukurti);

let pasalinti = document.createElement("button");
pasalinti.textContent = "Pašalinti elementą";
pasalinti.style.backgroundColor = "red";
pasalinti.style.color = "white";
root.appendChild(pasalinti);

let naujas = null;

sukurti.onclick = function () {
    if (naujas === null) {
        naujas = document.createElement("p");
        naujas.textContent = "Naujas elementas sukurtas!";
        root.appendChild(naujas);
    }
};

pasalinti.onclick = function () {
    if (naujas !== null) {
        naujas.remove();
        naujas = null;
    }
};

// 7.
let counterButton = document.createElement("button");
counterButton.textContent = "Spausk mane";
root.appendChild(counterButton);

let skaicius = document.createElement("span");
skaicius.textContent = " 0";
root.appendChild(skaicius);

let counter = 0;

counterButton.onclick = function () {
    counter++;
    skaicius.textContent = " " + counter;
};