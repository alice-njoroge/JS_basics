class Car{
    constructor(name) {
        this.brand = name;
    }
    presentBrand(){
        return "I currently drive a " +this.brand;
    }
}
myCar = new Car("ford");



document.getElementById('cars').innerText = myCar.presentBrand();