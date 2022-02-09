
const request = require('request')

const cheerio = require('cheerio');

const allcardobj = require('./scorecard')

function newDestination(fullLink)
{
    request(fullLink,cb2)

    function cb2(error,responce,body)
    {
        if (error)
        {
            console.error(error);
        }
        else
        {
                scorecard(body);
        }
    }

    function scorecard(body)
    {
        let $ = cheerio.load(body)

        let matchlink = $('a[data-hover="Scorecard"]')

        for(let i=0;i<matchlink.length;i++)
        {
            let score = $(matchlink[i]).attr('href')
            let links = 'https://www.espncricinfo.com' + score ;
            //console.log(links)

            allcardobj.links(links);
        }
    }

}


module.exports ={
    getallfunction : newDestination
}