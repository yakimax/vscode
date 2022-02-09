const url ="https://www.espncricinfo.com/series/ipl-2020-21-1210595"

const request = require('request')

const cheerio = require('cheerio');

const fs = require('fs');

const path = require('path');

const xlsx = require('xlsx');

let iplpath = path.join(__dirname,"IPL")



const allmatchfunction = require('./allmatchfunction')



folderCreator(iplpath)


request(url,cb)

function cb (error,response,html)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
            htmlreader(html)
    }
}

function htmlreader(html)
{
    let $ = cheerio.load(html)

    let anchorElement = $('a[data-hover="View All Results"]')
    
    
    let link = anchorElement.attr('href')
    
    let fullLink = "https://www.espncricinfo.com" + link ;

    //console.log(fullLink);
    allmatchfunction.getallfunction(fullLink);
}


function folderCreator(iplpath)
{
    if(fs.existsSync(iplpath)==false)
    {
        fs.mkdirSync(iplpath);
    }
}