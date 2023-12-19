const fs = require('fs')
const inquirer = require('inquirer');
//How to remove color package?
const Color = require('color');

//TODO: ASK ABOUT xmlns, I still don't fully understand the purpose. 

//need to fix function createCircle (response) {
    const circle = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <circle width="300px" height="200px" fill="${response.shapeColor}" stroke="black" stroke-width="6"/>
    <text x="50%" y="50%">${response.textCharacters}</text>
    </svg>`;
}

function createTriangle (response) {}

function createSquare (response) {
    const Square = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <rect width="300px" height="200px" fill="${response.shapeColor}" stroke="black" stroke-width="6"/>
    <text x="50%" y="50%">${response.textCharacters}</text>
    </svg>`;
    return Square
}

function svgTemplate (response) {
    if (response.shape === "Circle") {
        return createCircle(response)
    } else if (response.shape === "Triangle") {
        return createTriangle(response) 
    } else {
        return createSquare(response)
    }
}

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
        fs.writeFile('SVG-Dist/logo.svg', svgTemplate(response), (err) => 
        err ? console.error(err) : console.log('Success!'))
    })
