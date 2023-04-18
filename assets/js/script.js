let planetImage = document.querySelector("#planet-image");
let planetName = document.querySelector("#planet-name");
let planetBasicDetails = document.querySelector("#planet-basicDetails");
let planetDescription = document.querySelector("#planet-description");
let planetLink = document.querySelector("#planet-link");



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0bb9ee6632mshc5ac8ef7fdd663fp153f7bjsnd8f9747790b0',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
};

fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        showPlanetMercury(response)
    })
    .catch(err => console.error(err));

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': '0bb9ee6632mshc5ac8ef7fdd663fp153f7bjsnd8f9747790b0',
// 		'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
// 	},
// 	body: '{"model":"text-davinci-003","prompt":"Say this is a test","max_tokens":7,"temperature":0,"top_p":1,"n":1,"stream":false,"logprobs":null,"stop":"
// "}'
// };

// fetch('https://openai80.p.rapidapi.com/completions', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

function showPlanetMercury(response) {
    console.log(response)
    planetImage.src = response[0].imgSrc.img;
    planetName.textContent = `${response[0].name}`;
    console.log(planetImage)
}