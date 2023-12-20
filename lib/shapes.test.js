const {Square, Circle, Triangle} = require('./shapes')

//why do I need to use shape.shapeColor instead of this.shapeColor?
//why does the square string need to have the specific indentation if the string content itself matches? Lines 9-11
//basically tests are creating instances (this time a class function) to then make a test against that instance?
describe('Testing shape class functionality', () => {
    it('returns a square svg string', () => {
        const shapeSquare = new Square('squ', 'red', 'blue');
        const squareString = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <rect width="300px" height="200px" fill="${shapeSquare.shapeColor}"/>
    <text text-anchor="middle" font-size="60" x="150" y="125" fill="${shapeSquare.textColor}" >${shapeSquare.text}</text>
    </svg>`
        expect(shapeSquare.render()).toMatch(squareString);
    })
    it('returns a circle svg string', () => {
        const shapeCircle = new Circle('cir', 'red', 'blue');
        const circleString = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="${shapeCircle.shapeColor}"/>
    <text text-anchor="middle" font-size="60" x="150" y="125" fill="${shapeCircle.textColor}" >${shapeCircle.text}</text>
    </svg>`
        expect(shapeCircle.render()).toMatch(circleString);
    })
    it('returns a triangle svg string', () => {
        const shapeTriangle = new Triangle('tri', 'red', 'blue');
        const triangleString = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,18 244, 182 56, 182" fill="${shapeTriangle.shapeColor}" stroke="black" stroke-width="6"/>
    <text text-anchor="middle" font-size="60" x="150" y="125" fill="${shapeTriangle.textColor}" >${shapeTriangle.text}</text>
    </svg>`
        expect(shapeTriangle.render()).toMatch(triangleString);
    })
})