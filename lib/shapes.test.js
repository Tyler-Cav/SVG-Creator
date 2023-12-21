const {Square, Circle, Triangle} = require('./shapes')

//CHANGE COLORS OF 
describe('Testing shape class functionality', () => {
    it('returns a square svg string', () => {
        const shapeSquare = new Square('squ', 'red', 'blue');
        const squareString = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <rect width="300px" height="200px" fill="red"/>
    <text text-anchor="middle" font-size="60" x="150" y="125" fill="blue" >squ</text>
    </svg>`
        expect(shapeSquare.render()).toEqual(squareString);
    })
    it('returns a circle svg string', () => {
        const shapeCircle = new Circle('cir', 'red', 'blue');
        const circleString = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="red"/>
    <text text-anchor="middle" font-size="60" x="50" y="60" fill="blue" >cir</text>
    </svg>`
        expect(shapeCircle.render()).toEqual(circleString);
    })
    it('returns a triangle svg string', () => {
        const shapeTriangle = new Triangle('tri', 'red', 'blue');
        const triangleString = `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,18 244, 182 56, 182" fill="red" stroke="black" stroke-width="6"/>
    <text text-anchor="middle" font-size="60" x="150" y="120" fill="blue" >tri</text>
    </svg>`
        expect(shapeTriangle.render()).toEqual(triangleString);
    })
})