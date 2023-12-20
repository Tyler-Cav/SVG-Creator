class Shape {
    constructor(text, shapeColor, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
}

class Square extends Shape {
    render() {return    `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <rect width="300px" height="200px" fill="${this.shapeColor}"/>
    <text text-anchor="middle" font-size="60" x="150" y="125" fill="${this.textColor}" >${this.text}</text>
    </svg>`;}
}
class Circle extends Shape {
    render() {return `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/>
    <text text-anchor="middle" font-size="60" x="150" y="125" fill="${this.textColor}" >${this.text}</text>
    </svg>`;}
}

class Triangle extends Shape {
    render() {return `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,18 244, 182 56, 182" fill="${this.shapeColor}" stroke="black" stroke-width="6"/>
    <text text-anchor="middle" font-size="60" x="150" y="125" fill="${this.textColor}" >${this.text}</text>
    </svg>`;}
}

module.exports = {Square, Circle, Triangle}
