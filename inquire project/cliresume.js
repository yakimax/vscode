const cp = require("child_process");
const inquirer = require("inquirer");

function displayList()
{
        inquirer.prompt([
            {
                type : "list",
                choices : [ 'About' , 'skills' , 'academics' , 'projects' ],
                name : 'selection'
            }
        ]).then(function(answer)
        {
            if(answer.selection == 'academics')
            {
                cp.execSync('start chrome https://drive.google.com/drive/u/1/shared-with-me' )
            }
            else if(answer.selection == 'skills')
            {
                console.log("java , javascript , html , css , node.js , c++")
            }
            else if(answer.selection == 'projects')
            {
                cp.execSync('start chrome https://drive.google.com/drive/u/1/shared-with-me' )
            }
            else{
                console.log("gobi lelo")
            }
            displayNext()
        })
    }

    displayList()

    function displayNext(){


        inquirer.prompt([
            {
                type : "list",
                choices : ['GoBack' , 'exit'],
                name : 'selection'
            }
        ]).then(function(answer)
        {
            if(answer.selection == 'GoBack')
            {
                displayList()
            }
            else
            {
                console.log("resume closed")
            }
        })

    }


