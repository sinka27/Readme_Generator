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
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }   
        }
      },
      //Project Description
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter description to continue!');
                return false;
            }   
        }
      },
      // Installation Instruction
    {
        type: 'editor',
        name: 'installation',
        message: 'How do you install this project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue!');
                return false;
            }
        }
    },
    // Usage Information
    {
        type: 'editor',
        name: 'usage',
        message: 'How to use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use project!');
                return false;
            }
        }
    },
    // Contribution Guidlines
    {
        type: 'editor',
        name: 'contribution',
        message: 'How should people contribute to this project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project!');
                return false;
            }
        }
    },
     // Test Instructions 
     {
        type: 'editort',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project!');
                return false;
            }
        }
     },
       // License Options
       {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'BSD 3-Clause License', 'BSD 2-Clause License', 'GNU GPL v3', 'GNU LGPL v3', 'Mozilla Public License 2.0', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },

      //GitHub user name
      {
        type: 'input',
        name: 'gitHubUserName',
        message: 'Enter your GitHub user name: (Required)', 
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
      },

       // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
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
.then(function (userInput) {
    console.log(userInput)
    writeToFile("generatedREADME.md", generateMarkdown(userInput)); 
})
}

// Function call to initialize app
init();