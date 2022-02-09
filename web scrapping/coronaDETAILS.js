const request = require('request');
const cheerio = require('cheerio');

console.log('before');

request('https://www.worldometers.info/coronavirus/',cb)

function cb(error, response, html) {
  if(error)
  {
    console.error('error:', error); // Print the error if one occurred
  }
  else
  {
      handleHTML(html);
  }


//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
};

function handleHTML(html)
{
    let seltool = cheerio.load(html);

    let contentArr = seltool('.maincounter-number')

    // for(let i=0;i<contentArr.length;i++)
    // {
    //     let data = seltool(contentArr[i]).text();
    //     console.log(data);
    // }
    let totalCases=seltool(contentArr[0]).text()
    let totalDeaths=seltool(contentArr[1]).text()
    let totalRecovered=seltool(contentArr[2]).text()
    console.log('totalCases are',totalCases)
    console.log('totalDeaths are',totalDeaths)
    console.log('totalRecovered are',totalRecovered)
}




console.log('after');

