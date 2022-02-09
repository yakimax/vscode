//const url ="https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard"

const request = require('request')

const cheerio = require('cheerio');

const path = require('path');

const fs = require('fs');

const xlsx = require('xlsx');

//const { url } = require('inspector');

function allLink(url)
{
    request(url,cb);
}


function cb (error,response,html)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
            detailer(html)
    }
}

function detailer(html)
{
    let $ = cheerio.load(html);

    let descElement = $('.header-info .description');
    

    let splitter = descElement.text().split(',')
    
    let venue = splitter[1];
    console.log('venue :' + venue)

    let date = splitter[2];
    console.log('date:' + date)

    let league = splitter[3];
    console.log('league :' + league)

    let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text').text();
    console.log('result' + result);

    let innings = $('.card.content-block.match-scorecard-table>.Collapsible');
    let htmlstring = '';

    for(let i=0;i<innings.length;i++)
    {
        htmlstring = $(innings[i]).html();

        let teamname = $(innings[i]).find('h5').text();
        teamname = teamname.split('INNINGS')[0].trim();


        let opponentindex = i==0 ? 1:0;

        let opponentname = $(innings[opponentindex]).find('h5').text();
        opponentname = opponentname.split('INNINGS')[0].trim();


        console.log(venue, date,league,teamname,opponentname,result);

        let cinnings = $(innings[i]);

        let allrows = cinnings.find(".table.batsman tbody tr")

        for(let j=0;j<allrows.length;j++)
        {
            let allCols = $(allrows[j]).find('td');
            let isworthy = $(allCols[0]).hasClass('batsman-cell');
            
            if(isworthy==true)
            {
                let playerName = $(allCols[0]).text().trim();
                let runs = $(allCols[2]).text().trim();
                let balls = $(allCols[3]).text().trim();
                let fours = $(allCols[5]).text().trim();
                let sixes = $(allCols[6]).text().trim();
                let STR = $(allCols[7]).text().trim();

                console.log(`${playerName} | ${runs} | ${balls} | ${fours} | ${sixes} | ${STR}`);
                processPlayer(
                    teamname,
                    playerName,
                    runs,
                    balls,
                    fours,
                    sixes,
                    STR,
                    opponentname,
                    venue,
                    result,date
          
                  );
            }
        }
    }
    
}

function processPlayer(
    teamName,
    playerName,
    runs,
    balls,
    fours,
    sixes,
    STR,
    opponentName,
    venue,
    result, date
  ) {
    let teamPath = path.join(__dirname, "IPL", teamName);
    dirCreator(teamPath);
  
  
    let filePath = path.join(teamPath , playerName+ ".xlsx")
    let content = excelReader(filePath , playerName)
  
    let playerObj = {
      teamName,
      playerName,
      runs,
      balls,
      fours,
      sixes,
      STR,
      opponentName,
      venue,
      result,date
    }
  
    content.push(playerObj)
    excelWriter(filePath , content , playerName)
  }
  
  function dirCreator(filePath) {
    if (fs.existsSync(filePath) == false) {
      fs.mkdirSync(filePath);
    }
  }
  
  function excelWriter(filePath, jsonData, sheetName) {
    let newWB = xlsx.utils.book_new();
    // Add new WorkBook
    let newWS = xlsx.utils.json_to_sheet(jsonData);
    // This will take JSON and will convert into Excel Format
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, filePath);
  }
  
  function excelReader(filePath, sheetName) {
    if (fs.existsSync(filePath) == false) {
      return [];
    }
  
    let wb = xlsx.readFile(filePath);
    // which excel file to read
    let excelData = wb.Sheets[sheetName];
    // pass the sheet Name
    let ans = xlsx.utils.sheet_to_json(excelData);
    // conversion from sheet to JSON
    return ans;
  }
module.exports = {
    links : allLink
}