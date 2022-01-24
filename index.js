// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    //Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',   
      },
      //Project Description
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)', 
      },
      // Installation Instruction
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project? (Required)',
    },
    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'How to use this project? (Required)',
    },
    // Contribution Guidlines
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project? (Required)',
    },
     // Test Instructions 
     {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
     },
       // License Options
       {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    },

      //GitHub user name
      {
        type: 'input',
        name: 'gitHubUserName',
        message: 'Enter your GitHub user name: (Required)', 
      },

       // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email?',
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Information transferred to the README successfully!'))
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then(function userInput() {
    console.log(userInput)
        writeToFile("generatedREADME.md", generateMarkdown(userInput)); 
})
}

// Function call to initialize app
init();
