const person ={
    name : "Mintu",
    age: 33,
    friend : ["sadhin", "hero", "milon"],
    details:{
        job: "yes",
        isMarried : true ,
        status : "Not found",
        father: {
            name:"Mr. X",
        }

    }
}
//console.log(person.details.father.name)

console.log(person["details"]["father"]["name"])


