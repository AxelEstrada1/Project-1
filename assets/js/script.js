//Created elements 
let planetImage = document.querySelector("#planet-image");
let planetName = document.querySelector("#planet-Name");
let planetBasicDetails = document.querySelector("#planet-basicDetails");
let planetDescription = document.querySelector("#planet-description");
let planetLink = document.querySelector("#planet-link");
let mercuryButton = document.querySelector("#mercuryBtn");
let venusButton = document.querySelector("#venusBtn");
let earthButton = document.querySelector("#earthBtn");
let marsButton = document.querySelector("#marsBtn");
let jupiterButton = document.querySelector("#jupiterBtn");
let saturnButton = document.querySelector("#saturnBtn");
let uranusButton = document.querySelector("#uranusBtn");
let neptuneButton = document.querySelector("#neptuneBtn");





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


// fetch('https://openai80.p.rapidapi.com/completions', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// fetch('https://covers.openlibrary.org/b/id/12547191.json')
//     .then(response => response.json())
//     .then(libraryData => {

//         console.log(libraryData);
//     })


setImage();
async function fetchImage(url) {
    const img = new Image();
    return new Promise((res, rej) => {
        img.onload = () => res(img);
        img.onerror = e => rej(e);
        img.src = url;
    });
}

async function setImage() {

    const img = await fetchImage('https://covers.openlibrary.org/b/id/12547191-L.jpg');
    const w = img.width;
    const h = img.height;
    document.body.appendChild(img)
    console.log(img)

}
// async function fetchImage(url) {
//     const img = await new Image();
//     return new Promise((res, rej) => {
//         img.onload = () => res(img);
//         img.onerror = e => rej(e);
//         img.src = url;
//     });
// }
// const img = fetchImage('https://covers.openlibrary.org/b/id/12547191-L.jpg');
// console.log(img.url)
// const w = img.width;
// const h = img.height;
// fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings ")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })

fetch("https://openlibrary.org/search.json?q=jupiter ")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })




// Calling the API DOM to html
function showPlanetMercury() {
    console.log(planetsArr)
    console.log(planetsArr[0]);
    planetImage.src = planetsArr[0].imgSrc.img;
    planetName.textContent = ` ${planetsArr[0].name}`;
    planetBasicDetails.textContent = `${planetsArr[0].basicDetails.volume}`;
    planetDescription.textContent = `${planetsArr[0].description}`;
}

function showPlanetVenus() {
    console.log(planetsArr)
    console.log(planetsArr[1]);
    planetImage.src = planetsArr[1].imgSrc.img;
    planetName.textContent = ` ${planetsArr[1].name}`;
    planetBasicDetails.textContent = `${planetsArr[1].basicDetails.volume}`;
    planetDescription.textContent = `${planetsArr[1].description}`;
}

function showPlanetEarth() {
    console.log(planetsArr)
    console.log(planetsArr[2]);
    planetImage.src = planetsArr[2].imgSrc.img;
    planetName.textContent = ` ${planetsArr[2].name}`;
    planetBasicDetails.textContent = `${planetsArr[2].basicDetails.volume}`;
    planetDescription.textContent = `${planetsArr[2].description}`;
}

function showPlanetMars() {
    console.log(planetsArr)
    console.log(planetsArr[3]);
    planetImage.src = planetsArr[3].imgSrc.img;
    planetName.textContent = ` ${planetsArr[3].name}`;
    planetBasicDetails.textContent = `${planetsArr[3].basicDetails.volume}`;
    planetDescription.textContent = `${planetsArr[3].description}`;
}

function showPlanetJupiter() {
    console.log(planetsArr)
    console.log(planetsArr[4]);
    planetImage.src = planetsArr[4].imgSrc.img;
    planetName.textContent = ` ${planetsArr[4].name}`;
    planetBasicDetails.textContent = `${planetsArr[4].basicDetails.volume}`;
    planetDescription.textContent = `${planetsArr[4].description}`;
}

function showPlanetSaturn() {
    console.log(planetsArr)
    console.log(planetsArr[5]);
    planetImage.src = planetsArr[5].imgSrc.img;
    planetName.textContent = ` ${planetsArr[5].name}`;
    planetBasicDetails.textContent = `${planetsArr[5].basicDetails.volume}`;
    planetDescription.textContent = `${planetsArr[5].description}`;
}

function showPlanetUranus() {
    console.log(planetsArr)
    console.log(planetsArr[6]);
    planetImage.src = planetsArr[6].imgSrc.img;
    planetName.textContent = ` ${planetsArr[6].name}`;
    planetBasicDetails.textContent = `${planetsArr[6].basicDetails.volume}`;
    planetDescription.textContent = `${planetsArr[6].description}`;
}

function showPlanetNeptune() {
    console.log(planetsArr)
    console.log(planetsArr[7]);
    planetImage.src = planetsArr[7].imgSrc.img;
    planetName.textContent = ` ${planetsArr[7].name}`;
    planetBasicDetails.textContent = `${planetsArr[7].basicDetails.volume}`;
    planetDescription.textContent = `${planetsArr[7].description}`;
}

mercuryButton.addEventListener("click", showPlanetMercury);
venusButton.addEventListener("click", showPlanetVenus);
earthButton.addEventListener("click", showPlanetEarth);
marsButton.addEventListener("click", showPlanetMars);
jupiterButton.addEventListener("click", showPlanetJupiter);
saturnButton.addEventListener("click", showPlanetSaturn);
uranusButton.addEventListener("click", showPlanetUranus);
neptuneButton.addEventListener("click", showPlanetNeptune);

