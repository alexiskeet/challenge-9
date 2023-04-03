// packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const util = require('util');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input', 
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (if not applicable, enter N/A)',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for usage of your website:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any collaborators for your website:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What type of license do you have for this project? (MIT, GPLv3, GPLv2, N/A)',
    },
    {
        type: 'input',
        name: 'repoLink',
        message: 'Please provide link to your GitHub repository:'
    },
    {
        type: 'input',
        name: 'liveLink',
        message: 'Please provide link to your live wesbite:'
    },
];


//function to write README file
function writeToFile(fileName, data) {
    return fstat.writeFileSync(path.json(process.cwd(), fileName), data);
}
 

//function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((responses) => writeFile('newREADME.md', generateMarkdown(responses)))
    .then(() => console.log('Sucessfully wrote to generate.README.md!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
