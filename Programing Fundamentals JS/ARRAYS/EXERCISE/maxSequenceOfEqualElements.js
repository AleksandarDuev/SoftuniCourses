function maxSequenceOfEqualElements(arr) {
    let maxArr = [];
 
    for(let i = 0; i< arr.length; i++){
 
        let currentArr = [arr[i]]; //
 
        for(let j = i + 1; j < arr.length; j++){
 
            if (arr[i] === arr[j]){
                currentArr.push(arr[j]); //
            }else{
                break;
            }
        }
        if (currentArr.length > maxArr.length){
            maxArr = currentArr;
        }
    }
    console.log(maxArr.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
