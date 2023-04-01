// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
        message: 'What type of license do you have for this project? (If not applicable, write N/A)',
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
// .then((answers) => {
//     const readMeContent = writeToFile(answers);

//     fs.writeFile('generated.README.md', readMeContent, (err) =>
//     err ? console.log(err) : console.log ('Sucessfully created README.md!')
//     );
//});

// TODO: Create a function to write README file
function writeToFile({name, title, description, installation, usage, credits, license, repoLink, liveLink}) {
    `
    # ${title}
    Created by: ${name}
    ${description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Links](#links)

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Credits
    ${credits}

    ## License
    ${license}

    ## Links
    - [GitHub-Repo](${repoLink})
    - [Live-Site](${liveLink})
    `

}
 

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => writeFile('generate.README.md', writeToFile(answers)))
    .then(() => console.log('Sucessfully wrote to generate.README.md!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
