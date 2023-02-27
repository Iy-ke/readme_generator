const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [  
    {
    type: 'input',
    name: 'title',
    message: 'What is The title of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for the project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What are the usage information?',
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?',
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your Github username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address.',
  },
 
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data)
};

// function to initialize program
function init() {
  inquirer.prompt (questions)
  // .then(() => generateMarkdown(questions))
  .then((responses) => writeToFile(path.join(__dirname,'./src/README.md'),  generateMarkdown(responses)))
  .then(() => console.log('Successfully created Readme file!'))
  
};

// function call to initialize program
init();

