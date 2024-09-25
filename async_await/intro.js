// const fs = require("fs");
// function fetchdata(url) {
//   return new Promise((resolve, reject) => {
//     console.log("starting fetching data from ", url);
//     setTimeout(() => {
//       console.log("download complete");
//       let downloaddata = {
//         status: 200,
//         data: "new Data from server",
//       };
//       reject(downloaddata);
//     }, 2000);
//   });
// }

// function writeinfile(data) {
//   const tostring = data.data;
//   return new Promise((resolve, reject) => {
//     fs.writeFile("output.txt", tostring, (dt, err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("data written to file and status is :", data.status);
//       }
//     });
//     resolve("Data written to file");
//   });
// }

// async function newfunction() {
//   // here await is working as the promise , when promise is fulfilled it returns us the resolved promise other wise it will reject the promise
//   try {
//     let downloaddata = await fetchdata("www.google.com");

//     // now the downloaddata is resolve we can pass this in writeata code
//     let writtendata = await writeinfile(downloaddata);
//     console.log("this is writtenddata ", writtendata);
//   } catch (error) {
//     console.log("error from catch", error);
//   }
// }
// console.log("start");
// newfunction();
// console.log("end1");
// console.log("end12");
// console.log("end123");
// console.log("end1234");
// console.log("end12345");
// console.log("end123456");
// console.log("end1234567");
// console.log("end12345678");
// console.log("end123456789");
// console.log("end12345678910");
// for (let i = 0; i < 5000; i++) {
//   console.log(i);
// }

function sum(a, b) {
    console.log("inside sum function");

  return new Promise((resolve, reject) => {
      setTimeout(() => {
    console.log("sum done");
        
      resolve(a + b);
    }, 1000);
  });
}
function minus(a, b) {
    console.log("inside minuns function");

  return new Promise((resolve, reject) => {
      setTimeout(() => {
    console.log("minus done");
        
      resolve(a - b);
    }, 1500);
  });
}
function multiply(a, b) {
    console.log("inside multiply function");

  return new Promise((resolve, reject) => {
      setTimeout(() => {
    console.log("multiply done");
        
      resolve(a * b);
    }, 2000);
  });
}

async function calculate(a, b) {
  try {
    console.log("starting inside calculation of passed paramtere ");
    const res1 = await multiply(a, b);
    console.log("calculated the re1");

      const res2 = await minus(res1, 5);
    console.log("calculated the re2");
      
      const res3 = await sum(res2, 2);

    console.log("calculated the re3");
      
      console.log("final res is , check if undefined", res3);
      return res3;
  } catch (error) {
    console.log(error);
  }
}
console.log("satrting the calculate function");
(async () => {
  console.log("starting the calculate function");
  let x = await calculate(10, 5);
  console.log("value of x is", x);
  console.log("ending the calculate function");
})();

// console.log('value of x is ', x)
console.log("ending the calculate function");

// satrting the calculate function
// starting inside calculation of passed paramtere 
// inside sum function
// ending the calculate function
// sum done
// calculated the re1
// inside minuns function
// minus done
// calculated the re2
// inside multiply function
// multiply done
// calculated the re3
// final res is , check if undefined 20