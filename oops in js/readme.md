# OOP IN JAVASCRIPT

Object oriented programming  is the concept of binding the data and its member function inside a box.

` Js is not a Object oriented language, neither it is completely functional language. It supports both features.
`
There are two type of OOP language 
* Class based language like c++, JAVA
* Prototype based language like Js

Four primary pillar of OOP language 
* Encapsulation
* Inheritence 
* Polymorphism 
* Abstraction

> Classes are blueprint of the object definig their properties and member fucntion.

> Js is not an OOP language but it has support for it, js is an prototype based programming language, but it does support classes, which can be termed as the syntactical sugar over prototype

> Everything in js seems to be an object 

```javascript {cmd="node"}
const arr = [1,2,3,4,5,6]
console.log(arr);
// when we will console.log this arr we will get this a soutput 
// [ 1, 2, 3, 4, 5, 6 ]
```

> Object in js are the data structure constaining the data and member function as key value pair in it.

```javascript {cmd="node"}
const person = {
    name: "sumityadav",
    age: 25,
    details:function (){
        console.log(`this is ${this.name} and im ${this.age} years old`);
    }

}
person.details();

// we can alos use the constructor to define the object 
class persona{
    constructor(name , age ){
        this.name = name;
        this.age = age ;
    }
}
var p =new  persona("sumit yadav", 25);
console.log(p)
```

> Js is an prototype based programming , class is provided to them just to align with the other oop language, claases was not present before ES6 module

### Javascript Encapsulation

Encapsulation puts the data variable and data function together inside in a box which is why its called as the encapsultion.

Encapsulation ensures that data member can be accessed only using the data function while the abstraction enables us to restrict the access od these data outside the class.

Javascript does the encapsulation and abstraction using the functional scope and closures.

###### Functional scopes

When we define any variable inside an function then we can only acess them from the inside of the function this is how we can implement the abstraction.

```javascript {cmd="node"}
function messageFunc(){
    const message= "Hey there!"
    console.log("Message from  inside: ",message);
}

// Calling the function which internally defines the message
messageFunc(); 

// Trying to access message from outside the function which defines it
console.log("Message from  outside: ",message); // this line of code will throw error saying message is not defined.

```

###### Closures

We can create a function inside a function and that inner function will be able to access the varibale defined outside it.
 
```javascript {cmd="node"}
function messageFunc(){
    const message = "Hey there!"
    const displayMessage = function(){
        console.log(message);
    }
    displayMessage();
}

// Calling the function which internally defines the message
messageFunc();
```
### Javascript Inheritence 

Js uses the conecpt of the prototypal inheritence. It enables the object to inherit the prperties from their parent or from any other object.

```javascript {cmd="node"}
const personto = {name:"sumit yadav", age : 25};
console.log(personto)

```

### Javascript Polymorphism 

Polymorphism in OOP is feature by which we can define the same function in different forms.

some of exmaple of polymorphism is constructor overloading.

