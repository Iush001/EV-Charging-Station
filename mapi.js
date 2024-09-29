const apiKey = 'ccd367357305350fbbb5f6b1ebd06d3a';
const apiUrl = `https://api.openchargemap.io/v3/poi/?key=${ccd367357305350fbbb5f6b1ebd06d3a}&latitude=YOUR_LATITUDE&longitude=YOUR_LONGITUDE`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Process the charging station data
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

    const apiKey = 'ccd367357305350fbbb5f6b1ebd06d3a';
const apiUrl = `https://api.openchargemap.io/v3/poi/?key=${ccd367357305350fbbb5f6b1ebd06d3a}&latitude=YOUR_LATITUDE&longitude=YOUR_LONGITUDE`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Process the charging station data
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
