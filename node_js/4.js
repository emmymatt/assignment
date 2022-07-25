const urls = ['https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg','https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg','https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg','https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg','https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg','https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg','https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg']
const fs = require('fs')
const async = require('async')
const fetch = require('node-fetch')
const zlib = require('zlib')
let i = 0
async.parallel(
    urls.map(url => {
        return async callback => {
            const response = await fetch(url);
            const buffer = await response.buffer();
            
            // zip and write file to directory
            zlib.gzip(buffer, (err, zipped) => {
                if(err) throw err
                i+=1
                // check if directory exists
                if (!fs.existsSync(`./images${Math.ceil(i/5)}`)) {
                    fs.mkdirSync(`./images${Math.ceil(i/5)}`);
                }
                fs.writeFile(`./images${Math.ceil(i/5)}/${i}.zip`, zipped, (err) => {
                    if (err) throw err;
                    console.log(`${i} saved`);
                });
            })
        }
    }))