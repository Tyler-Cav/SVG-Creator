const fs = require('fs')
const inquirer = require('inquirer');
const {Square, Triangle, Circle} = require('./lib/shapes')

//prompts build to be used as values for the readme file
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter up to 3 characters for your logo',
            name: 'text',
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
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'Please choose your background shape' ,
            choices: ['Circle', 'Triangle', 'Square'],
            name: 'shape'
        },
        {
            type: 'input',
            message: 'Please enter a shape color or hexidecimal number',
            name: 'shapeColor'
        }
    ])

        .then(response => {
            let shape;
            if (response.shape === "Circle") {
                shape = new Circle(response.text, response.shapeColor, response.textColor)
            } else if (response.shape === "Triangle") {
                shape = new Triangle(response.text, response.shapeColor, response.textColor)
            } else {
                shape = new Square(response.text, response.shapeColor, response.textColor)
            }
            console.log(response)
                //.then response function used to initialize the svg file.
        fs.writeFile('SVG-Dist/logo.svg', shape.render(), (err) => 
        err ? console.error(err) : console.log('Success!'))
    })
