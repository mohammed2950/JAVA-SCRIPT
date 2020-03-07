"use strict";

console.log('Javascript started for exercise Executor');


const ADD = 'ADD';
const SUB = 'SUB';
const MUL = 'MUL';

function executor(op, a, b) {
    let res; // The result of the function
    if ('string' === typeof op) { // op is a string
        switch (op) {
            case ADD:
                res = a + b;
                break;
            case SUB:
                res = a - b;
                break;
            case MUL:
                res = a * b;
                break;
            default :
                res = op + ": Unkown operation"; 
        }
    } else if ('function' === typeof op) {
        res = op(a,b); // given function call 
    } else {
        throw new Error("Bad parameter type");
    }
    return res;
}

