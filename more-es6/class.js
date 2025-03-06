class Product{
    malik = 'glass usin';

    constructor(name, price, brand, malik){
        
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.malik = malik;
    
     }
    details(){
       console.log('Product is a glass', this.malik);
       console.log(`ami ${this.name} product kinte cai`);
    }

    

}

const iphone = new Product("iphone", "1000", "apple" ,  "job");
console.log(iphone);
iphone.details();

//const xiaomi = new product("xiaomi", "500", "mi", "jani na");
//console.log(xiaomi);
//xiaomi.details();


