

function permutationPalindorme(text){
    const realText = text.replaceAll(" ","")
    let counter = 1;
    let wordHashMap = new Map();
    for (let i = 0; i < realText.length; i++){
        if(!wordHashMap.has(realText[i])){
            wordHashMap.set(realText[i],counter)
        }
        else{
            wordHashMap.set(realText[i],counter + 1);
        }
    }
    let secondCounter = 0;
    wordHashMap.forEach((value, key) => {
        if (value % 2 === 0){
            secondCounter++;
        }
    })
    if (secondCounter === wordHashMap.size){
        return true;
    }
    else return secondCounter === wordHashMap.size - 1;

}

console.log(permutationPalindorme("nurses run"));