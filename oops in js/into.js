/* classes are blueprint of real life entities 

classes can have different properties and behavior 
properties are also called as the data member and member function  

an object is an instance of class , memory is not allocated to a class unntill an object has been created 

conntructir are used to initialise the class instance 


*/
/*
class car{
    constructor(color, model, year){
        this.color = color;
        this.model = model;
        this.year = year;
    }
    startEngine(){
        console.log("Engine started");
    }
    stopEngine(){
        console.log("Engine stopped");
    }
};

var c1 = new car("blue", "s1", 2025);
console.log(c1.year)
c1.startEngine()

class professor 
{
    constructor(name, age, clg) {
        this.name = name;
        this.age = age;
        this.school = clg;
    }
    details() {
        console.log(`Name: ${this.name}, Age: ${this.age}, School: ${this.school}`);
    }
}

var p1 = new professor("John Doe", 35, "MIT");
p1.details();

class players{
    constructor(name , age , trophies , centuries , fifities , thirties  ) {
        this.name = name;
        this.age = age;
        this.trophies = trophies;
        this.centuries = centuries;
        this.fifities = fifities;
        this.thirties = thirties;

    }
    isGoat() {
        if(this.age >= 25 && this.trophies >= 5 && this.centuries >= 1 && this.fifities >= 1 && this.thirties >= 1) {
            return true;
        }
        return false;
    }
    
    destructor() {
        console.log("Object is destroyed");
    }
}

var p2 = new players("Messi", 31, 30, 1, 1, 2);

console.log(p2.isGoat(), p2.name);

// lets deep dive into inheritence

class animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makesound() {
        console.log(`my name is ${this.name} and my sound is ${this.sound}`);
    }
}

class dog extends animal {
    constructor(name, sound, life) {
        super(name, sound);
        this.life = life;
    }
    bark() {
        super.makesound();
        console.log("Woof Woof");
console.log("this is ", this);
        
    }
    
}

var d1 = new dog("bobby", "woof woof ", 5);
console.log(d1);
d1.makesound();
d1.bark();

/*
this ===>>

this keyword in js is used to refer the current context or object in which the object os executing 


PROTOTYPE IN JS 
--
in js a prototype is an object from which other object derives their properties and methods 

every js object has an prototype and when we try to access these properties or methods of objct then js will first check if that properties exist on that object or not . if that doesnt exist on that objext then it looks upto prototyep chain untill it gets null.



*/
/*
LEXICAL SCOPING --
 this is also called as the static scoping , refers to the setting the scope or range of functionality of variable so that it may be called in that block of code .

 In the programming the scope is referes to the area of the function or part of the code where a given variable is visible 

*/

// case 1
// in this case we will be getting undefined for this.age and this.name because an arrow function dont have their own this constext , they derive this context from their surrounding lexicla scope , since here player is defined in the global scope anad hence will refer to undefined in the global scope
/*console.log("case 1");
const player = {
  name: "sujmit yadav",
  age: 25,
  display: () => {
    console.log(`this is ${this.name} and my age is ${this.age}`);
  },
};
player.display();
// regular functuion have their own this context 
console.log("case 2");
const newplayer = {
  name: " sumit yadav ",
  age: 25,
  display: function () {
    console.log(`this is ${this.name} and my age is  ${this.age}`);
  },
};
newplayer.display();


// settimeout also have their own this contextv ;eading to the desired out put 

console.log("case 3");
const newplayers = {
  name: " sumit yadav ",
  age: 25,
  display: () => { 
    setTimeout(() => {
      console.log(`this is ${this.name} and my age is  ${this.age}`);
    }, 2000);
  },
};
newplayer.display();

console.log("case 4");
const newplayerss = {
  name: " sumit yadav ",
  age: 25,
  display: function () {
    setTimeout(() => {
      console.log(`this is ${this.name} and my age is  ${this.age}`);
    }, 2000);
  },
};

newplayer.display();
*/

