function Car(name, mileage,speed) {
    this.name = name;
    this.mileage = mileage;
    this.speed = speed;
}

const myCar = new Car('Benz', 10, 220);
console.log(myCar);
