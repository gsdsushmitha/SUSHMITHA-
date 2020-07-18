console.log("Function");
function evenOdd(number){
    let reminder = number % 2;
    if (reminder==0) {
        console.log("even");
    }else if (reminder ==Math.round(reminder)){
        console.log("odd");
    }else{
        console.log("invalid");
    }
}
evenOdd(23);