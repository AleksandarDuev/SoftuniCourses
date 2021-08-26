function employees(input){
for(let employee of input){
    let employeeId = {
name : employee,
personaNumber : employee.length
    }
    console.log(`Name: ${employeeId.name} -- Personal Number: ${employeeId.personaNumber}`);

}
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )