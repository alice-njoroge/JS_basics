class Car {
    constructor(name) {
        this.brand = name;
    }

    presentBrand() {
        return "I currently drive a " + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show(){
        return this.presentBrand()+ " "+this.model;
    }
}

myCar = new Model("ford","Mustang");
myCar.show();
document.getElementById('cars').innerText = myCar.show();
