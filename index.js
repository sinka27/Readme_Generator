// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',   
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)', 
      },
      {
        type: 'input',
        name: 'motivation',
        message: 'Motivation behind this project (Required)', 
      },
    //   {
    //     type: 'input',
    //     name: 'problemsSolved',
    //     message: 'What problems were solved by this project? (Required)', 
    //   },
      {
        type: 'checkbox',
        name: 'tools&Technologies',
        message: 'What Tools & Technologies were used for this project? (Required)', 
        choices: ['Visual Studio Code','HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'node.js', 'npm', ],
      },
      {
        type: 'input',
        name: 'gitHubRepo',
        message: 'Enter your GitHub Repository URL: (Required)', 
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
