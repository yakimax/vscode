const request = require('request');
const cheerio = require('cheerio');
request('https://www.linkedin.com/in/shivam-verma-335110185/', function (error, response, html) {
    if(error){
      console.error(error);
    }
    else{
      handleHtml(html); 
    }
});

function handleHtml(body){
  
  let $ = cheerio.load(body);

  let name = $('.pv-text-details__left-panel h1.text-heading-xlarge').text();
  console.log(name);
}