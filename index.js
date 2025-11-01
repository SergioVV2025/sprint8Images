const images = [
  {name: "Creepers",
   location: "./images/creepers.jpg"},
  {name: "Girls",
    location: "./images/girls.jpg"},
  {name: "Karlsbad",
    location: "./images/karlsbad.jpg"},
  {name: "Museé du Louvre",
    location: "./images/louvre.jpg"},
  {name: "Guillermo Meza",
    location: "./images/pexels-guillermo-meza.jpg"},
  {name: "Squids-Z",
    location: "./images/squids-z-unsplash.jpg"},
  {name: "Woman",
    location: "./images/woman.jpg"},  
  {name: "Jerry Wang",
   location: "./images/jerry-wang.jpg"},
   {name: "Karsten Winegeart",
   location: "./images/karsten-winegeart.jpg"},
   {name: "Fluffy dog",
   location: "./images/fluffy-dog.jpg"},
   {name: "RCCBTN",
   location: "./images/pexels-rccbtn.jpg"},
   {name: "Shairaos",
   location: "./images/pexels-shairaos.jpg"}
];

let contenedor = document.getElementById("container");

images.forEach(insertarImagenes);

function insertarImagenes(imagen) {
  let figure = document.createElement("figure") ;
  
  let img = document.createElement("img");
  img.setAttribute("src", imagen.location);
  img.setAttribute("alt", imagen.name);  
  
  let figcaption = document.createElement("figcaption"); 
  figcaption.textContent = imagen.name;
  
  figure.append(img, figcaption);
  
  contenedor.append(figure);
} 

