var scrape = require('website-scraper');
var options = {
  urls: ['http://nodejs.org/'],
  directory: './website/',
};
 
// with promise
scrape(options).then((result) => {
    /* some code here */
}).catch((err) => {
    /* some code here */
});
 
// or with callback
scrape(options, (error, result) => {
    /* some code here */
});