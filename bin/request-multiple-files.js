const fetch = require('node-fetch');

const requestMultipleUrls = async aUrlsArray => {
    const results = [];

    return new Promise((resolve, reject) => {
        try {
            aUrlsArray.forEach(aUrl => {
                fetch(aUrl).then(aResponse => {
                    if (aResponse && aResponse.ok) {
                        return aResponse.json();
                    }
                    else {
                        console.log('Error fetching from ' + aUrl)
                        return {
                            error: 'There was an error fetching from ' + aUrl
                        };
                    }
                }).then(aJson => {
                    aJson.url = aUrl;
                    results.push(aJson);
                    if (results.length === aUrlsArray.length) {
                        resolve(results);
                    }
                });
            });
        }
        catch (error) {
            reject(results);
        }
    });
};

module.exports = requestMultipleUrls;