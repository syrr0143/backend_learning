# BACKEND USING NODE.JS


NOTE -

* whenever we have callback, function , microtask queue , event loop, event queue 

* microtask queue has higher priority 
* normal callback -> event queue 

* promises -> callback -> microtask queue 
``` javascript
let x = Promise.resolve("This will passed as value of resolved promise ")
x.then(function processpromise(value)=>{ // we are passing callback here 
console.log("This wil be executed first", value);

})
```

## async await in js 

```javascript
async function(){

}
```
The  above function does following
*  allow usage of await inside it, to consume promise 
* <mark>return</mark> statemnt is <u>promise</u>.




```ultree

```




