const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '37f0117021msh3bf81e73c9ea30ap12d251jsn858668b3e15e',
		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
	}
};

fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



const option = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '37f0117021msh3bf81e73c9ea30ap12d251jsn858668b3e15e',
    'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
  },
  body: '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"Hello!"}]}'
};
  
fetch('https://openai80.p.rapidapi.com/chat/completions', option)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));