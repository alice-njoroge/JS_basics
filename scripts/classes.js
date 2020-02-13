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
    static Hello(){
        return "hello static world";
    }
}

myCar = new Model("ford","Mustang");
myCar.show();
document.getElementById('cars').innerText = myCar.show();
document.getElementById('st').innerText = Model.Hello();
