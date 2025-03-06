const products = [
    { name: 'laptop', price: 32000, brand: 'hp', color: 'silver' ,id:1 },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden', id:2 },
    { name: 'watch', price: 3000, brand: 'casio', color: 'black', id:3 },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black', id:4 },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray', id:5 }

]


const product = products.find(product => product.id === 3)
console.log(product)

const NewProducts = products.filter(product => product.price > 5000)
console.log(NewProducts)

products.forEach(product =>{
    if(product.price > 5000){
        console.log(product.name)
    }
   
    else{
        console.log("cheap")


    }
})

const hasproduct = products.filter(p => p.id !=3);
console.log(hasproduct)



const product2 =[
    {id:1, name: 'iphone', brand: 'apple', price: 1000},
    {id:2, name: 'samsung', brand: 'samsung', price: 500},
    {id:3, name: 'oneplus', brand: 'oneplus', price: 700},
    {id:4, name: 'iphone', brand: 'apple', price: 1000},
    {id:5, name: 'samsung', brand: 'samsung', price: 500},
    {id:6, name: 'oneplus', brand: 'oneplus', price: 700},
    {id:7, name: 'iphone', brand: 'apple', price: 1000},
]

const hasproduct2 = product2.map(p => {
    if(p.brand === 'iphone'){
        p.price = p.price + 100;
    }
    return p;

})
console.log(hasproduct2)


products.forEach(product => {
    if(product.price > 5000){
        product.price = product.price + 500;
    }
})
console.log(products)


const product3 = product2.filter(p => p.name === 'iphone')
console.log(product3)