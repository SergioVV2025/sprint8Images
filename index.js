const images = [
  {name: "Creepers",
   location: "creepers.jpg"},
  {name: "Girls",
    location: "girls.jpg"},
  {name: "Karlsbad",
    location: "karlsbad.jpg"},
  {name: "Museé du Louvre",
    location: "louvre.jpg"},
  {name: "Guillermo Meza",
    location: "pexels-guillermo-meza.jpg"},
  {name: "Squids-Z",
    location: "./squids-z-unsplash.jpg"},
  {name: "Woman",
    location: "woman.jpg"},  
  {name: "Almas Salakhov",
   location: "almas-salakhov-unsplash.jpg"}
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

