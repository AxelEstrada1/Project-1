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
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '37f0117021msh3bf81e73c9ea30ap12d251jsn858668b3e15e',
            'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'
        }
    };
    
    fetch('https://astronomy.p.rapidapi.com/api/v2/bodies/positions?latitude=33.775867&longitude=-84.39733&from_date=2017-12-20&to_date=2017-12-21&elevation=166&time=12%3A00%3A00', option)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
