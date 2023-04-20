// class MyClass{                                  // class structure
//     constructor(name){
// this.name = name;
//     }
// };

// const myInstance = new MyClass('Peter');      // keeps instance to the class : console.log(myInstance) 
// const anotherInstance = new MyClass('George')
// console.log(myInstance);                      //returns: MyClass{name: 'Peter'};
// console.log(anotherInstance);                 //returns: MyClass{name: 'George'};

class Person{                                 
    constructor(name){
this.name = name;
    }
};

const Person1 = new Person('Peter');      
const Person2 = new Person('George');
console.log(Person1);
console.log(Person2);