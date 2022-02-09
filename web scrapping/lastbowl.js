const request = require('request')
const cheerio = require('cheerio')



request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary',cb)

function cb(error, response, html)
{
  
  if(error)
  {
    console.error('error:', error); // Print the error if one occurred
  }
  else
  {
      htmlReader(html);
  }
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
};

function htmlReader(html)
{
    let reader = cheerio.load(html);
    let finder = reader('d-flex match-comment-padder align-items-center.match-comment-long-text');

    let get = reader(finder[0]).text()
    console.log(get)
}

