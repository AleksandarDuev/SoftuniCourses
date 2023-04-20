// function townToJson(input) {
//    let[columns,...table] = input.map(splitLine);
   
//    function isEmptyString(x){
//        return x !== "";
//    }
//    function convertIfNum(x){
//        isNaN(x) ? x : Number(Number(x).toFixed(2))
//    }
//    function splitLine(input){
// return input.split('|').filter(isEmptyString).map(x=>x.trim()).map(convertIfNum)            
//    }
//    return JSON.stringify(table.map(entry => {
//        return columns.reduce((acc, curr, index)=>{
//            acc[curr] = entry[index];
//            return acc;
//        },{});
//    }));

// }
// console.log(townToJson(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |']
// ))

function townToJson(towns) {
    let townsArr = [];
    for (let town of towns.slice(1)) {
        let [empty, townName, lat, lng] =
            town.split(/\s*\|\s*/);
        let townObj = { Town: townName, Latitude:
                Number(Number(lat).toFixed(2)), Longitude: Number(Number(lng).toFixed(2)) };
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));
}
townToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)