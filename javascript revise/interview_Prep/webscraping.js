const request = require('request');
const cheerio = require('cheerio');
request('https://pepcoding.com/', function (error, response, html) {
    if(error){
      console.error(error);
    }
    else{
      handleHtml(html); 
    }
});

function handleHtml(body){
  
  let $ = cheerio.load(body);

  let name = $('.bolder .section-heading-l .nados-heading span').text();
  console.log(name);
}