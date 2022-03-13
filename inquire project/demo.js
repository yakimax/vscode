const inquirer = require("inquirer");

inquirer.prompt([
    {
        type : "list",
        choices : [ 'choice1' , 'choice2' ],
        name : 'selection'
    }
]).then(function(answer)
{
    if(answer.selection == 'choice1')
    {
        console.log("chouce 1 is selected")
    }
    else
    {
        console.log("choice 2 is selected")
    }
})