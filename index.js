const images = [
  { name: "Creepers", location: "./images/creepers.jpg" },
  { name: "Girls", location: "./images/girls.jpg" },
  { name: "Karlsbad", location: "./images/karlsbad.jpg" },
  { name: "Museé du Louvre", location: "./images/louvre.jpg" },
  { name: "Guillermo Meza", location: "./images/pexels-guillermo-meza.jpg" },
  { name: "Squids-Z", location: "./images/squids-z-unsplash.jpg" },
  { name: "Woman", location: "./images/woman.jpg" },
  { name: "Jerry Wang", location: "./images/jerry-wang.jpg" },
  { name: "Karsten Winegeart", location: "./images/karsten-winegeart.jpg" },
  { name: "Fluffy dog", location: "./images/fluffy-dog.jpg" },
  { name: "RCCBTN", location: "./images/pexels-rccbtn.jpg" },
  { name: "Shairaos", location: "./images/pexels-shairaos.jpg" },
  { name: "Jim Morrison", location: "./images/Jim_Morrison.jpg" },
  { name: "Jaques Cousteau", location: "./images/avatar.jpg" },
];

let imageContainer = document.getElementById("image-container");

images.forEach(insertarImagenes);

function insertarImagenes(imagen) {
  let figure = document.createElement("figure");

  let img = document.createElement("img");
  img.setAttribute("src", imagen.location);
  img.setAttribute("alt", imagen.name);

  let figcaption = document.createElement("figcaption");
  figcaption.textContent = imagen.name;

  figure.append(img, figcaption);

  imageContainer.append(figure);
}

const videos = [
  {
    name: "caroProp18",
    location: "./videos/caroProp18_14_opt_sa.mp4",
  },
  {
    name: "caroProp19",
    location: "./videos/caroProp19_2_opt_sa.mp4",
  },
  {
    name: "caroProp20",
    location: "./videos/caroProp20_3_opt_sa.mp4",
  },
  {
    name: "caroProp21",
    location: "./videos/caroProp21_2_opt_sa.mp4",
  },
  {
    name: "caroProp22",
    location: "./videos/caroProp22_1_opt_sa.mp4",
  },
];

let videoContainer = document.getElementById("video-container");

videos.forEach(insertarVideos);

function insertarVideos(video) {
  let figure = document.createElement("figure");

  let videoElement = document.createElement("video");
  videoElement.setAttribute("src", video.location);
  // videoElement.setAttribute("autoplay", true);
  videoElement.setAttribute("controls", true);
  videoElement.muted = true;

  let figcaption = document.createElement("figcaption");
  figcaption.textContent = video.name;

  figure.append(videoElement, figcaption);

  videoContainer.append(figure);
}
