class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return `${this.make} ${this.model}`;
    }
}

// SportsCar Class (inherits from Car)
class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model); // Inheriting properties from Car
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
