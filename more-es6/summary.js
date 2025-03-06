const Person ={
    name: 'kodom',
    age: 21,
    1: 100,
    father: {
        name: 'badam',
        age: 50
    }
}


console.log(Object.keys(Person))
console.log(Object.values(Person))
console.log(Object.entries(Person))

console.log(Person.name)


console.log(Person?.mother?.name)



const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNumber = number.map(x => x * x);
console.log(newNumber)


const products = [
    {id:1, name: 'iphone', brand: 'apple', price: 1000},
    {id:2, name: 'samsung', brand: 'samsung', price: 500},
    {id:3, name: 'oneplus', brand: 'oneplus', price: 700},
    {id:4, name: 'iphone', brand: 'apple', price: 1000},
    {id:5, name: 'samsung', brand: 'samsung', price: 500},
    {id:6, name: 'oneplus', brand: 'oneplus', price: 700},
    {id:7, name: 'iphone', brand: 'apple', price: 1000},
]

const newProducts = products.filter(product => product.color === 'black')
console.log(newProducts)


class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class hana extends person{
    constructor(name, age, address){
        super(name, age);
        this.address = address;
    }
}

