const fs = require('fs');
require('dotenv').config();
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const BitlyClient = require('bitly').BitlyClient;
const bitly = new BitlyClient(process.env.BITLY_ACCESS_TOKEN);
const shorten = async url => {
    const response = await bitly.shorten(url);
    return {
        link: response.link,
        url: url
    };
}

fs.readFile('./urls.json', 'utf-8', (error, data) => {
    if(error) console.log(error)
    else{
        const json = JSON.parse(data)
        const urls = json.urls
        const promises = urls.map(url => shorten(url))
        Promise.all(promises).then(shortenedUrls => {
            // console.log(shortensedUrls)
            const csvWriter = createCsvWriter({path: './urls.csv', header: [{id: 'url', title: 'URL'}, {id: 'link', title: 'Shortened URL'}]});
            csvWriter.writeRecords(shortenedUrls).then(() => console.log('The CSV file was written successfully'));
        }).catch(error => console.log(error))
    }
})