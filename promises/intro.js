/* if there is any asynchronous task in js then they are surely going to be executed in the future
runtime gives us both asynchrounous and synchronous features of console.log

console.log is not officialy a part of js but are instead added to js by the hosting environment

even console.log can have different nature as it can be dependent on the runtime environment 

for example in browser console.log is synchronous

for example in node console.log is asynchronous

lets talk about the callback in this page
*/

/*
INVERSION OF CONTROL ::==>>
if tere is ssome part of code whose control we are passing to other and we dont know how that one is going to execute 
*/

/*
function fun(inputstring, fn) {
    let output = inputstring.split(',');
    for (let i = 0; i < output.length; i++){
        fn(output[i]); 
    }
}

// now we are clling it , here we dodnt whathas been done or what if we are changing the logic , suppose awe are using razorpay and somehow their logic has some bug then we will also have to face the same and that can have a large impact on apayment 
fun("name:sumit ,college:iiitbh ", function process(ip) {
    let arr = ip.split(":");
    console.log("{", arr[0], " => ", arr[1], "}");
}
)
 */

/*
DRAWBACK OF CALLBACKS --

//1. They can lead to callback hell
//2. thay can lead t a condition called inversion of control that we discussed above
*/
// PROMISES :
// promise are basically an object representing the eventual completion or failure of an asynchronous task

// Promise


/*
function download(url) {
    console.log("starting donwload ")
    setTimeout(() => {
        console.log("download completed");
        var response = {
            status: 200,
            data: "data from server"
        }
    }, 1000);
    return response; 
}

if we returns the response insisde the setimeout function then the response is not available immediately when the download function returns 
this happens because the function has not completed yet 

*/
/*

const fs = require('fs')
function download(url, fn) {
    console.log("starting donwload from",url)
    setTimeout(() => {
        console.log("download completed");
        let response = 'we are writing in the file output.txt'
        fn(response);
        console.log('ending the settimeout')
    }, 3000);
    console.log('end of download funtion')
}

let data = download("www.google.com", (response) => {
    console.log('this is response from the callback that is in the settimeout function', response);
     fs.writeFile('output.txt', response, (err) => {
        if (err) {
            return console.error('Error writing to file:', err);
        }
        console.log('File written successfully!');

        // Now read the file
        fs.readFile('output.txt', 'utf8', (err, data) => {
            if (err) {
                return console.error('Error reading file:', err);
            }
            console.log('File data:', data);
        });
    });
})
    
this peicec of code what we have written here is mostly hard to understand due to the classic callback hell problem */

// console.log('this is data after download function call', data);

// lets remove the call back hell problem here
/*
promises in js 4 major properties 
1. status
2. value
3. onfulfillment
4. on rejection


status are of 3 types 
1. pending
2. fulfilled
3. rejected

value - this is status dependent 

onfulfillment - when promise is fulfilled and value is set  to new value that we are setting that is this is returned value 

onrejection - when promise is rejected and value is set

pending - when the status of the promise is pendig then the value is undefined 
*/

// lets implement the promise rather than using the callback

// function fetchdata() {
//     return new Promise((resolve, reject) => {
//         console.log('step 1: starting download');
//         setTimeout(() => {
//             let data = "step 2: downloaded song from website ";
//             console.log(" step 3 : download comleted ");
//             resolve(data); // when success return data 
//         }, 3000);
//     })
// }
// this was all about the promises creation
// now lets see how the promises consumption works

const fs = require("fs");
const { resolve } = require("path");
// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//         console.log("starting download , inside fetchdata");
//         setTimeout(() => {
//             console.log("download completed");
//             let data = `mere dholna sun mere pyar kidhun , mere dholna sun mere pyar ki dhun ,
//             tere dhadkano ki sarghosi mere khwahisho me sajti hain/n from ${url}`;
//             resolve("hello yeah")
//         }, 2000);
//     })
// }

// function processSong(data) {
//     return new Promise((resolve, reject) => {
//         console.log("Processing the song ");
//         setTimeout(() => {
//             console.log("song processed success");
//             resolve(data);
//         }, 2000);
//     })
// }

// function saveSong(data) {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//          console.log("saving in the file ");
//         let filename = "output.txt"
//          fs.writeFile(filename, data, (err) => {
//                 if (err) {
//                     reject(err); // Handle any error that occurs during file writing
//                 } else {
//                     resolve(filename);
//                 }
//             });
//         }, 3000);
//     })
// }

// Using promise chaining
// fetchData("www.google.com")
//     .then(processSong)
//     .then(saveSong)
//     .then((filename) => {
//         console.log("Operation success, file saved as:", filename);
//     })
//     .catch((err) => {
//         console.log(err)
//     })

    /*
    NOTE::::====>>>>>
    you cannot have more than one of resolve , reject or both of them 

    resolve("hello")
    resolve("hello")

    in the above case the promise id fulfilled with the hello one not hello2 

    resolve("hello1");
    reject("error");

    in this case only resolve wiil be sent as fulfilled promise
    */
// const fs = require("fs");

function fetchData(url) {
    return new Promise((resolve, reject) => {
        console.log("Starting download, inside fetchData");
        setTimeout(() => {
            console.log("Download completed");
            let data = `mere dholna sun mere pyar ki dhun, mere dholna sun mere pyar ki dhun, 
            tere dhadkano ki sargoshi mere khwahisho me sajti hain from ${url}`;
            resolve(data); // Resolve with actual song data
        }, 2000);
    });
}


// Using promise chaining
fetchData("www.google.com")
    .then((value) => {
        console.log("Processing the song");
        setTimeout(() => {
            console.log("Song processed successfully");
            resolve(value); // Resolve with the processed data
        }, 2000);
    })
    .then((value) => {
        console.log('in last  promise');
        resolve('process completed')
    })
    
