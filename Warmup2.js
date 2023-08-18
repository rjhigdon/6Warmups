function perfectSquare(num){
    if(Number.isInteger(Math.sqrt(num))){
        console.log((Math.sqrt(num)+1)**2)
    }else{
        console.log("sqaure root is not an integer")
    }
}

perfectSquare(9)
perfectSquare(16)
perfectSquare(36)
perfectSquare(11)