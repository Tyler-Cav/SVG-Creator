const fs = require('fs')
const inquirer = require('inquirer');
//const generateMarkdown = require('./');



//prompts build to be used as values for the readme file
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is your GitHub Username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your GitHub User HTTPS Link?',
            name: 'githublink'
        },
        {
            type: 'input',
            message: 'What is your description?',
            name: 'description'
        },
        {
            type: 'list',
            message: 'Please choose your license option',
            choices: ['MIT', 'Apache2.0', 'GPL3', 'BSD3', 'None'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please add your installation details',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Please enter your usage details',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Please enter your contribution details',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please describe any tests that were performed',
            name: 'testing',
        },
        {
            type: 'input',
            message: 'Please enter your email for users to reach out for questions.',
            name: 'email',
        }
    
    ])
    //.then response function used to initialize the write file for the read me
    //the generateMarkdown keyword is calling to the generateMarkdown.js function which provides details of the prompt responses.
        .then(response => {
        fs.writeFile('Dist/ReadMe.md', generateMarkdown(response), (err) => 
        err ? console.error(err) : console.log('Success!'))
    })
