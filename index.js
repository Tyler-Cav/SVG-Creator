const fs = require('fs')
const inquirer = require('inquirer');
const Color = require('color');
//const generateSVG = require('./');

//prompts build to be used as values for the readme file
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter up to 3 characters for your logo',
            name: 'textCharacters',
            validate: function(type) {
                if (type.length < 4) {
                    return true
                } else {
                    return 'Error, please select a maximum or 3 characters'
                }
            }
        },
        {
            type: 'input',
            message: 'Please enter a text color or hexidecimal number',
            name: 'textColor',
            //validate: 
        },
        {
            type: 'list',
            message: 'Please choose your background shape' ,
            choices: ['Circle', 'Triangle', 'Square'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Please enter a shape color or hexidecimal number',
            name: 'shapeColor'
        }
    ])
    //.then response function used to initialize the write file for the read me
    //the generateMarkdown keyword is calling to the generateMarkdown.js function which provides details of the prompt responses.
        .then(response => {
            console.log(response)
        //fs.writeFile('Dist/logo.svg', generateMarkdown(response), (err) => 
        //err ? console.error(err) : console.log('Success!'))
    })
