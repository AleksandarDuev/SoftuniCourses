const person = {
    name: 'Peter',
    age: 28
}
console.log(Object.getOwnPropertyDescriptors(person)); //Object.getOwnPropertyDescriptors-> shows the properties of the fields
console.log(Object.defineProperty(person, 'last_name',{
    value: 'Jackson',
    writable: true,    //-> if  set to false, can not change the value
    enumerable: true,  //-> true or false, 
    configurable: true //-> if set to false, can not change (value, writable....)
  }));                        //Object.defineProperty-> adds fields to the object;