function sortArr(arr){
    let hash = {}
    let tempArr = []
    arr.forEach((num, index) => {
        let product = num * (index + 1)
        hash[product] = num
        tempArr.push(product)
    })
    let result = tempArr.sort((a, b) => a - b).map((num) => hash[num])
    return result
}

console.log(sortArr[23, 2, 3, 4, 5])

function sortArr(arr) {
    return arr
      .map((value, index) => ({ value, product: value * (index + 1) }))
      .sort((a, b) => a.product - b.product)
      .map(entry => entry.value)
  }

  console.log(sortArr([23, 2, 3, 4, 5]))