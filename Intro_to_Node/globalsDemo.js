/* there are some of the globals that are avaialbe in the node one of them is 
process
__dirname
module
*/
// const linearsearch = require('./exports.js')
// const number = [1, 2, 3, 4, 5];
// const target = 4;

// console.log(linearsearch(number, target));


/*
basically we have three types of scopes in js 
1. global scope
2. function scope
3. block scope

*/

const test = () => {
    console.log('printing x top',x);
     const x = 10;
    console.log(x);
}
test();
