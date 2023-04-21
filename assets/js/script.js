//Created elements 
let planetImage = document.querySelector("#planet-image");
let planetName = document.querySelector("#planet-Name");
let planetBasicDetails = document.querySelector("#planet-basicDetails");
let planetDescription = document.querySelector("#planet-description");
let planetLink = document.querySelector("#planet-Link");
let mercuryButton = document.querySelector("#mercuryBtn");
let venusButton = document.querySelector("#venusBtn");
let earthButton = document.querySelector("#earthBtn");
let marsButton = document.querySelector("#marsBtn");
let jupiterButton = document.querySelector("#jupiterBtn");
let saturnButton = document.querySelector("#saturnBtn");
let uranusButton = document.querySelector("#uranusBtn");
let neptuneButton = document.querySelector("#neptuneBtn");
let asteroidBeltButton = document.querySelector("#asteroidBtn");
let bd1Header = document.querySelector("#bd1");
let bd2Header = document.querySelector("#db2");
let wikiHeader = document.querySelector("#wikitext");
let bookHeader = document.querySelector("#book-head")

let bookTitle = document.querySelector("#book-title");
let bookAuthor = document.querySelector("#book-author");

let planetClk = document.getElementById("planetClk");

function planetExists(planet) {
  return planetClk.innerHTML.includes(planet);
}

let mercuryBtn = document.getElementById("mercuryBtn");
mercuryBtn.addEventListener("click", () => {
  if (!planetExists("Mercury")) {
    localStorage.setItem("Mercury", true);
    planetClk.innerHTML += "Mercury, ";
  }
});

if (localStorage.getItem("Mercury") === "true") {
  if (!planetExists("Mercury")) {
    planetClk.innerHTML += "Mercury, ";
  }
}

let venusBtn = document.getElementById("venusBtn");
venusBtn.addEventListener("click", () => {
  if (!planetExists("Venus")) {
    localStorage.setItem("Venus", true);
    planetClk.innerHTML += "Venus, ";
  }
});

if (localStorage.getItem("Venus") === "true") {
  if (!planetExists("Venus")) {
    planetClk.innerHTML += "Venus, ";
  }
}

let earthBtn = document.getElementById("earthBtn");
earthBtn.addEventListener("click", () => {
  if (!planetExists("Earth")) {
    localStorage.setItem("Earth", true);
    planetClk.innerHTML += "Earth, ";
  }
});

if (localStorage.getItem("Earth") === "true") {
  if (!planetExists("Earth")) {
    planetClk.innerHTML += "Earth, ";
  }
}

let marsBtn = document.getElementById("marsBtn");
marsBtn.addEventListener("click", () => {
  if (!planetExists("Mars")) {
    localStorage.setItem("Mars", true);
    planetClk.innerHTML += "Mars, ";
  }
});

if (localStorage.getItem("Mars") === "true") {
  if (!planetExists("Mars")) {
    planetClk.innerHTML += "Mars, ";
  }
}

let jupiterBtn = document.getElementById("jupiterBtn");
jupiterBtn.addEventListener("click", () => {
  if (!planetExists("Jupiter")) {
    localStorage.setItem("Jupiter", true);
    planetClk.innerHTML += "Jupiter, ";
  }
});

if (localStorage.getItem("Jupiter") === "true") {
  if (!planetExists("Jupiter")) {
    planetClk.innerHTML += "Jupiter, ";
  }
}

let saturnBtn = document.getElementById("saturnBtn");
saturnBtn.addEventListener("click", () => {
  if (!planetExists("Saturn")) {
    localStorage.setItem("Saturn", true);
    planetClk.innerHTML += "Saturn, ";
  }
});

if (localStorage.getItem("Saturn") === "true") {
  if (!planetExists("Saturn")) {
    planetClk.innerHTML += "Saturn, ";
  }
}
let uranusBtn = document.getElementById("uranusBtn");
uranusBtn.addEventListener("click", () => {
  if (!planetExists("Uranus")) {
    localStorage.setItem("Uranus", true);
    planetClk.innerHTML += "Uranus, ";
  }
});

if (localStorage.getItem("Uranus") === "true") {
  if (!planetExists("Uranus")) {
    planetClk.innerHTML += "Uranus, ";
  }
}

let neptuneBtn = document.getElementById("neptuneBtn");
neptuneBtn.addEventListener("click", () => {
  if (!planetExists("Neptune")) {
    localStorage.setItem("Neptune", true);
    planetClk.innerHTML += "Neptune ";
  }
});

if (localStorage.getItem("Neptune") === "true") {
  if (!planetExists("Neptune")) {
    planetClk.innerHTML += "Neptune ";
  }
}
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0bb9ee6632mshc5ac8ef7fdd663fp153f7bjsnd8f9747790b0',
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
  }
};
let planetsArr = [];
fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    planetsArr = response
  })
  .catch(err => console.error(err));

let venusArr = [];
fetch("https://openlibrary.org/search.json?q=venus+planet")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log(data.docs[0].title);
    console.log(data.docs[0].author_name[0]);
    venusArr = data.docs;
  })


let mercuryArray = []
fetch("https://openlibrary.org/search.json?q=Mercury+planet&page=1")
  .then(response => response.json())
  .then(data => {
    console.log(data.docs);
    mercuryArray = data.docs;
    //console.log(data.docs[0].title);

  })
let venusArray = []
fetch("https://openlibrary.org/search.json?q=Venus+planet&page=1")
  .then(response => response.json())
  .then(data => {
    console.log(data.docs);
    venusArray = data.docs;
    //console.log(data.docs[0].title);

  })
let earthArray = []
fetch("https://openlibrary.org/search.json?q=earth+planet&page=1")
  .then(response => response.json())
  .then(data => {
    console.log(data.docs);
    earthArray = data.docs;
    //console.log(data.docs[0].title);

  })
let marsArray = []
fetch("https://openlibrary.org/search.json?q=mars+planet&page=1")
  .then(response => response.json())
  .then(data => {
    console.log(data.docs);
    marsArray = data.docs;
    //console.log(data.docs[0].title);

  })

let jupiterArray = []
fetch("https://openlibrary.org/search.json?q=jupiter+planet&page=1")
  .then(response => response.json())
  .then(data => {
    console.log(data.docs);
    jupiterArray = data.docs;
    //console.log(data.docs[0].title);

  })

let saturnArray = []
fetch("https://openlibrary.org/search.json?q=saturn+planet&page=1")
  .then(response => response.json())
  .then(data => {
    console.log(data.docs);
    saturnArray = data.docs;
    //console.log(data.docs[0].title);

  })
let uranusArray = []
fetch("https://openlibrary.org/search.json?q=uranus+planet&page=1")
  .then(response => response.json())
  .then(data => {
    console.log(data.docs);
    uranusArray = data.docs;
    //console.log(data.docs[0].title);

  })

let neptuneArray = []
fetch("https://openlibrary.org/search.json?q=neptune+planet&page=1")
  .then(response => response.json())
  .then(data => {
    console.log(data.docs);
    neptuneArray = data.docs;
    //console.log(data.docs[0].title);

  })


// Functions
function showPlanetMercury() {
  console.log(planetsArr)
  console.log(planetsArr[0]);
  planetImage.src = planetsArr[0].imgSrc.img;
  planetName.textContent = planetsArr[0].name
  planetBasicDetails.textContent = `Volume: ${planetsArr[0].basicDetails.volume}, Mass: ${planetsArr[0].basicDetails.mass}`;
  planetDescription.textContent = planetsArr[0].description
  planetLink.textContent = planetsArr[0].wikiLink
  planetLink.href = planetsArr[0].wikiLink
  planetDescription.textContent = `${planetsArr[0].description}`;
  bookTitle.textContent = mercuryArray[0].title;
  bookAuthor.textContent = mercuryArray[0].author_name;
}

function showPlanetVenus() {
  console.log(planetsArr)
  console.log(planetsArr[1]);
  planetImage.src = planetsArr[1].imgSrc.img;
  planetName.textContent = planetsArr[1].name
  planetBasicDetails.textContent = `Volume: ${planetsArr[1].basicDetails.volume}, Mass: ${planetsArr[1].basicDetails.mass}`;
  planetDescription.textContent = planetsArr[1].description
  bookTitle.textContent = venusArray[0].title
  bookAuthor.textContent = venusArray[0].author_name
  planetLink.textContent = planetsArr[1].wikiLink
  planetLink.href = planetsArr[1].wikiLink
}

function showPlanetEarth() {
  console.log(planetsArr)
  console.log(planetsArr[2]);
  planetImage.src = planetsArr[2].imgSrc.img;
  planetName.textContent = planetsArr[2].name
  planetBasicDetails.textContent = `Volume: ${planetsArr[2].basicDetails.volume}, Mass: ${planetsArr[2].basicDetails.mass}`;
  planetDescription.textContent = planetsArr[2].description
  bookTitle.textContent = earthArray[0].title
  bookAuthor.textContent = earthArray[0].author_name
  planetLink.textContent = planetsArr[2].wikiLink
  planetLink.href = planetsArr[2].wikiLink
}

function showPlanetMars() {
  console.log(planetsArr)
  console.log(planetsArr[3]);
  planetImage.src = planetsArr[3].imgSrc.img;
  planetName.textContent = planetsArr[3].name
  planetBasicDetails.textContent = `Volume: ${planetsArr[3].basicDetails.volume}, Mass: ${planetsArr[3].basicDetails.mass}`;
  planetDescription.textContent = planetsArr[3].description
  bookTitle.textContent = marsArray[0].title
  bookAuthor.textContent = marsArray[0].author_name
  planetLink.textContent = planetsArr[3].wikiLink
  planetLink.href = planetsArr[3].wikiLink
}

function showPlanetJupiter() {
  console.log(planetsArr)
  console.log(planetsArr[4]);
  planetImage.src = planetsArr[4].imgSrc.img;
  planetName.textContent = planetsArr[4].name
  planetBasicDetails.textContent = `Volume: ${planetsArr[4].basicDetails.volume}, Mass: ${planetsArr[4].basicDetails.mass}`;
  planetDescription.textContent = planetsArr[4].description
  bookTitle.textContent = jupiterArray[0].title
  bookAuthor.textContent = jupiterArray[0].author_name
  planetLink.textContent = planetsArr[4].wikiLink
  planetLink.href = planetsArr[4].wikiLink
}

function showPlanetSaturn() {
  console.log(planetsArr)
  console.log(planetsArr[5]);
  planetImage.src = planetsArr[5].imgSrc.img;
  planetName.textContent = planetsArr[5].name
  planetBasicDetails.textContent = `Volume: ${planetsArr[5].basicDetails.volume}, Mass: ${planetsArr[5].basicDetails.mass}`;
  planetDescription.textContent = planetsArr[5].description
  bookTitle.textContent = saturnArray[0].title
  bookAuthor.textContent = saturnArray[0].author_name
  planetLink.textContent = planetsArr[5].wikiLink
  planetLink.href = planetsArr[5].wikiLink
}

function showPlanetUranus() {
  console.log(planetsArr)
  console.log(planetsArr[6]);
  planetImage.src = planetsArr[6].imgSrc.img;
  planetName.textContent = planetsArr[6].name
  planetBasicDetails.textContent = `Volume: ${planetsArr[6].basicDetails.volume}, Mass: ${planetsArr[6].basicDetails.mass}`;
  planetDescription.textContent = planetsArr[6].description
  bookTitle.textContent = uranusArray[0].title
  bookAuthor.textContent = uranusArray[0].author_name
  planetLink.textContent = planetsArr[6].wikiLink
  planetLink.href = planetsArr[6].wikiLink
}

function showPlanetNeptune() {
  console.log(planetsArr)
  console.log(planetsArr[7]);
  planetImage.src = planetsArr[7].imgSrc.img;
  planetName.textContent = planetsArr[7].name
  planetBasicDetails.innerHTML = `Volume: ${planetsArr[7].basicDetails.volume}, 
    Mass: ${planetsArr[7].basicDetails.mass}`;
  planetDescription.textContent = planetsArr[7].description
  bookTitle.textContent = neptuneArray[0].title
  bookAuthor.textContent = neptuneArray[0].author_name
  planetLink.textContent = planetsArr[7].wikiLink
  planetLink.href = planetsArr[7].wikiLink
}

function showAsteroidBelt() {
  planetImage.setAttribute("src", "./assets/images/GrimGrizzledArmyant-size_restricted.gif");
  planetName.textContent = ''
  planetBasicDetails.innerHTML = 'Over 200 asteroids are known to be larger than 100 km, and a survey in the infrared wavelengths has shown that the asteroid belt has between 700,000 and 1.7 million asteroids with a diameter of 1 km or more.'
  planetDescription.textContent = 'The asteroid belt is a torus-shaped region in the Solar System, centered on the Sun and roughly spanning the space between the orbits of the planets Jupiter and Mars. It contains a great many solid, irregularly shaped bodies called asteroids or minor planets.'
  bookTitle.textContent = 'The Astroid Belt'
  bookAuthor.textContent = 'Besty Rathburn'
  planetLink.textContent = 'https://en.wikipedia.org/wiki/Asteroid_belt'
  planetLink.href = 'https://en.wikipedia.org/wiki/Asteroid_belt'
}

mercuryButton.addEventListener("click", showPlanetMercury);
venusButton.addEventListener("click", showPlanetVenus);
earthButton.addEventListener("click", showPlanetEarth);
marsButton.addEventListener("click", showPlanetMars);
jupiterButton.addEventListener("click", showPlanetJupiter);
saturnButton.addEventListener("click", showPlanetSaturn);
uranusButton.addEventListener("click", showPlanetUranus);
neptuneButton.addEventListener("click", showPlanetNeptune);
asteroidBeltButton.addEventListener("click", showAsteroidBelt);


let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let modalOpenBtn = document.querySelector(".btn-open");
let modalCloseBtn = document.querySelector(".btn-close");

let modalOpen = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

let modalClose = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

modalOpenBtn.addEventListener("click", modalOpen);
modalCloseBtn.addEventListener("click", modalClose);