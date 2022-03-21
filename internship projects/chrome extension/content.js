// let url = window.location.href;
let url = 'https://www.linkedin.com/in/guyandtheworld/?originalSubdomain=in'
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
    let finder = ('.artdeco-card.ember-view.break-words.pb3.mt2');
    let searched = finder.attr('section')
    console.log(finder)
}




