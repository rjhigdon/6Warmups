const arr1 = [10, 20, 14, 16, 18]
const arr2 = [30, 23, 54, 33, 96]

function diffFinder(arr1, arr2){
    let smallestNum = Infinity
    for(i=0; i<arr1.length; i++){
        for(j=0; j<arr2.length; j++){
            const diff = arr2[j] - arr1[i]
            if(Math.abs(diff) < smallestNum){
                smallestNum = Math.abs(diff)
            }
        }
    }
    return smallestNum
}
console.log(diffFinder([30, 23, 54, 33, 96],[10, 20, 14, 16, 18]))