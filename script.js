// always hungry

function alwaysHungry(arr){
    var hungry = [];
    for(var i=0; i<=arr.length; i++){
        if (arr[i]=="food"){
            hungry.push("yummy");
            console.log(hungry)
        }
        else{
            console.log("I'm Hungry");
        } 
    }  
}
alwaysHungry([3.14,"food","pie",true,"food"])    
alwaysHungry([4,1,5,7,2])


//High Pass Filter
function highPass(arr, cutoff) {

    var filteredArr = [];

    for(var i=0; i<= arr.length; i++){

        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
        else{
        }
    }
    return filteredArr;
    console.log(filteredArr);
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// Better than Average
function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0;

    for (var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    avg=sum/arr.length;

    var count = 0;

    for (var i=0; i<arr.length; i++){
        if(arr[i]>avg){
            count++;
        }
        else{
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//Array Reverse 
function reverse(arr){

    var arrReversed=[];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        arrReversed.push(arr[i]);
    }
    arr=arrReversed
    return arr;

}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var num = 0

        for(var i=1; i<n-1; i++){
            num=fibArr[i]+fibArr[i-1];
            fibArr.push(num);
        }

    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

