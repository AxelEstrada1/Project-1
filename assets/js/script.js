const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0bb9ee6632mshc5ac8ef7fdd663fp153f7bjsnd8f9747790b0',
        'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
    }
};

fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', options)
    .then(response => response.json())
    .then(response => console.log(response))
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