//object literal

// let user = {
//     name: "Name",
//     sayHello() {
//         console.log(this.name);
//     }
// }



//factory function

// function createPerson(n, a) {
//     return {
//         name: n,
//         age: a
//     }
// }
// let p = createPerson("name", 22)
// let p1 = createPerson("name2", 23)




//constructor function
// function createPerson(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// function hello(obj) {
//     obj.name = "New Name"
//     console.log(obj);

// }


// function createPerson(name, age, height) {
//     this.name = name;
//     this.height = height;
//     this.age = age;

//     this.obj = { weigth: 60, ...this }

//     console.log(this.obj);

// }


// class Animals {
//     constructor(age, height) {
//         this.age = age;
//         this.height = height;
//     }
//     static sayHello() {
//         console.log(this.name);
//     }
// }

// Animals.sayHello()
