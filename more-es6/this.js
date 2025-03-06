class Person{
    #status;
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.#status = status;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
        console.log(this.#status);
    }
}

const kodom = new Person('Kodom Ali', 21)
console.log(kodom)
kodom.sleep();
const badam = new Person('Kacha badam', 23)
badam.sleep();

console.log(kodom.status)

kodom.activity();

// bejal 
const lazy = kodom.sleep;
lazy()


const preson2 ={
    name: "golam",
    action: function(){
        console.log(this.name)
    }
}


function doSomething(){
    console.log(this)
}   
doSomething();