// ENDPOINT 1 ARRAY
fetch('https://dog.ceo/api/breeds/list/all') // Replace with your API URL
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // or .text() if the response is text
    })
    .then(data => {
        console.log(data); // Process and use the data here
    });

// ENDPOINT 2 ARRAY
fetch('https://dog.ceo/api/breeds/image/random') // Replace with your API URL
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // or .text() if the response is text
    })
    .then(data => {
        console.log(data); // Process and use the data here
    });

// ENDPOINT 3 ARRAY 
fetch('https://dog.ceo/api/breed/hound/images') // Replace with your API URL
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // or .text() if the response is text
    })
    .then(data => {
        console.log(data); // Process and use the data here
    });

// ENDPOINT 4 URL
fetch('https://dog.ceo/api/breed/hound/list') // Replace with your API URL
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // or .text() if the response is text
    })
    .then(data => {
        console.log(data); // Process and use the data here
    });

// ENDPOINT 5 URL
fetch('https://dog.ceo/api/breed/affenpinscher/images/random') // Replace with your API URL
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // or .text() if the response is text
    })
    .then(data => {
        console.log(data); // Process and use the data here
    });