let  obj ={
    name: '1',
    age: '2',
}
obj.color = 'red';
obj['color2'] = 'green';
// console.log(obj);


let [n, ...num] = 'Lilly 4 6 6 5'.split(' ');
let [m, ...num2] = 'Lilly 6 5'.split(' ');

console.log([...num, ...num2]);
