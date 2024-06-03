const fs = require('fs').promises;

async function readFile() {
    const data = JSON.parse((await fs.readFile('./data/products.json')).toString());
    return data;
}

async function getProducts(){
const data = await readFile();

return Object
.entries(data)
.map(([_id, item]) => Object.assign({}, item, {_id}))
};

async function createProduct(){
    const data = await readFile();
    const _id = nextId();
    data[_id] = product;
    fs.writeFile('./data/products.json', JSON.stringify(data, null, 2));
};

function nextId(){
    return 'xxxxxxxx'.replace(/x/g, ()=> (Math.random * 16 | 0).toString(16));
}

module.exports = {
    getProducts,
    createProduct
}