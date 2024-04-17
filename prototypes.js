// Example 1:
// const wishes = {
//     greet(){
//         console.log("good morning");
//     }
// };

// const emp = Object.create(wishes);

// emp.greet();

// let object = emp;
// do{
//     object = Object.getPrototypeOf(object);
//     console.log(object);
// }while(object);


// Example 2:

const temp = {
    greet(){
        console.log(`hi , my name is ${this.name} .`);
    }
};

function Person(name){
    this.name = name;
}

Object.assign(Person.prototype,temp);

let object = new Person("syam");
object.greet();
do{
    object = Object.getPrototypeOf(object);
    console.log(object);
}while(object);