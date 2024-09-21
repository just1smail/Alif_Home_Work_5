const createCar = (brand, model, year, isElectric) => {

    const car = new Object();

    car.brand = brand;
    car.model = model;
    car.year = year;
    car.isElectric = isElectric;

    return car;
}

console.log(createCar("Mercedes-Benz", "E-class", 2002, false));