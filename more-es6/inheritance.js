class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na chole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

    route(){
        console.log('dhaka to cox bazar')
    }   

}

const greenline = new Bus('greenline', 100000, 40, 1000);
console.log(greenline);
greenline.move();
greenline.route();

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
    
}

const volvo = new Bus('volvo', 100000, 40, 1000);
console.log(volvo);