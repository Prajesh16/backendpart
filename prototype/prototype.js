function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.drive = function () {
  console.log(`Driving a ${this.type}`);
};

function Car(type, brand) {
  Vehicle.call(this, type);
  this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const myCar = new Car("Car", "Toyota");
myCar.drive();
console.log(myCar.brand);
