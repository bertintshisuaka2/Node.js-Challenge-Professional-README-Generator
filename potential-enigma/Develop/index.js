// TODO: Include packages needed for this application
const generateMarkDownPackage = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    { 
        type: "input",
        message: "This program will help you generate a proper README file. To start, enter the Title of your project: ",
        name: "title",  
    },
    { 
        type: "input",
        message: "Next, please provide your name, so you can be credited: ",
        name: "name",  
    },
    { 
        type: "input",
        message: "Next, provide a good Description of your project: ",
        name: "description",  
    },
    { 
        type: "input",
        message: "How do you Install your project?",
        name: "installation",  
    },
    { 
        type: "input",
        message: "How would you Use this application?:",
        name: "usage",  
    },
    { 
        type: "input",
        message: "How can other people help to Contribute to this project?:",
        name: "contributing",  
    },
    { 
        type: "input",
        message: "How can other people help to Test this application?:",
        name: "tests",  
    },
    { 
        type: "list",
        message: "Please enter the license used for this repository: ",
        choices: ["MIT", "GNU 2.0", "GNU 3.0", "Apache License 2.0", "No License"],
        name: "licenses",  
    },
    { 
        type: "input",
        message: "Please enter your GitHub username: ", 
        name: "github",  
    },
    { 
        type: "input",
        message: "Please enter an email to which people can contact you for questions: ",
        name: "email",  
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, generatedMD) {
    fs.writeFile(fileName, generatedMD, err => 
        err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)
        .then(function(data) {
            console.log(data);
            const generatedMD = generateMarkDownPackage(data);
            const fileName = 'README.md';

            writeToFile(fileName, generatedMD);
        });

}

// Function call to initialize app
init();

//exports
module.exports = questions;
