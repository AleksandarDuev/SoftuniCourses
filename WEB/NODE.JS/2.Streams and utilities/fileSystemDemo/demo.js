const fs = require("fs");

// чЕТЕНЕ НА ФАЙЛОВЕ!!

// const file = fs.readFileSync('./fileSystemDemo/file.txt'); // синхронно четене на файл.
// console.log(file.toString());

// const file = fs.readFile("./fileSystemDemo/file.txt", (err, data) => { // асинхронно четене
//   console.log(data.toString());
// });

// async function start(){                    // ако използваме  promises при requier-a
// const data = await fs.readFile("./fileSystemDemo/file.txt")
// console.log(data.toString());
// }
// start();


//ПИСАНЕ ВЪВ ФАЙЛОВЕ

//fs.writeFileSync("./fileSystemDemo/output.txt", 'Hello again');     //синхронно
 
// const data = JSON.parse(fs.readFileSync('./fileSystemDemo/data.json'));
// data.Price++
// fs.writeFileSync('./fileSystemDemo/data.json', JSON.stringify(data))

// console.log(data);

//Асинхронно:

fs.readFile('./fileSystemDemo/data.json', (err, dataAsText) =>{
    const data = JSON.parse(dataAsText);
    
    data.Price++;
    
    fs.writeFile('./fileSystemDemo/data.json', JSON.stringify(data), (err)=>{
        console.log("Write complete");
    });
});

