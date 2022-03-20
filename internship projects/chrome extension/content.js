// let url = window.location.href;
let url = 'https://www.linkedin.com/in/mahesh-babu-24496632/'
const request = require('request')
const cheerio = require('cheerio')



request(url,cb)

function cb(error, response, html)
{
  
  if(error)
  {
    alert('error'); 
  }
  else
  {
      htmlReader(html);
  }
  
};

function htmlReader(html)
{
    let $ = cheerio.load(html);
    let finder = $('.pv-top-card-profile-picture__image.pv-top-card-profile-picture__image--show.ember-view').attr('src').length;

    console.log(finder)
}




