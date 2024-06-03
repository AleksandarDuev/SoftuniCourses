const bcrypt = require('bcrypt'); 

const pass1 = '123456';

async function testCreateHash(){
   const hash= await bcrypt.hash(pass1, 8)
   console.log(hash);
}
testCreateHash();

async function testCompare(){
    
} 
    
