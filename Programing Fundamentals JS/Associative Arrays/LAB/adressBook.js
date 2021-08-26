function adressBook(input){
let adressList = {}
    for(let line of input){
    let [name, adress] = line.split(':') 
    adressList[name] = adress;
    }

    // ako trqbwa sortiran list da se polzwa
    // const sorted = Object.keys(adressList).sort().reduce(
    //     (obj, key) => { 
    //         obj[key] = adressList[key]; 
    //         console.log(`${key} -> ${obj[key]}`);
    //         return obj;
    //     }, 
    //     {}
    // );

    Object.keys(adressList).sort().map((key) => { 
            console.log(`${key} -> ${adressList[key]}`);
        }
    );
}

adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)