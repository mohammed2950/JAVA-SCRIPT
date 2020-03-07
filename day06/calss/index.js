// //constructor syntax
// const obj = new Object()

// //literal syntax
// const obj1 = {

//     name: "Name 2",
//     for: "For Loop",
//     newObj: {
//         newName: "new Name"
//     },
// }

// //constructor syntax
// const array = new Array()

// //literal syntax
// const array1 = []

// obj.name = "Name1"

// // console.log(obj1);

// // delete obj1.for

// // console.log(obj1);


// //square backets notation

// let value = "name"

// console.log(obj1[value])

// obj1[value] = "new Name"

// console.log(obj1[value]);

// // console.log(obj, obj1);
// // console.log(array, array1);


// const person = {
//     name: "", age: 0, height: 0
// }

// console.log(person);

//exersice 1
// function isEmpty(name) {
//     for (const key in person) {
//         if (key === name) {
//             return true
//         }
//     }
//     return false
// }
// console.log(isEmpty("ages"))


// exercise 2
const products = {
    pro1: {
        name: "pro1",
        price: 200
    },
    pro2: {
        name: "pro2",
        price: 200
    },
    pro3: {
        name: "pro3",
        price: 200
    },
    pro4: {
        name: "pro4",
        price: 200
    },
    pro5: {
        name: "pro5",
        price: 200
    },
    total: function () {
        let t = 0;

        for (const key in this) {
            if (key !== "total") {
                t += products[key].price
            }
        }
        return t
    }
}

console.log(products.total())

//exercise 3
// clone the object in another variable

// let first = {
//     value1: "value 1",
//     value2: "value 2"
// }

// let second = {}


// for (const key in first) {
//     second[key] = first[key];
// }

// second = { ...first } //spread operator after es6

// second.value1 = "nul"

// console.log(first, second);




