function addPreviousRes (){
    let sum = 0;
    return function (a) {
        return sum += a;
    }
}
let sumResult = addPreviousRes();
console.log(sumResult(4));
console.log(sumResult(6));
console.log(sumResult(10));
console.log(sumResult(7));

function multResult (a) {
    return function (b){
        return a * b;
    }
}
console.log(multResult(5)(2));

function getNumber () {

    for (let i = 0; i < 10; i++) {
        let value = prompt('Add a number greater than 100, please');
        let valueIsNumber = +value;

        if ( isNaN(valueIsNumber) || valueIsNumber > 100 || i === 9 ) {
            console.log(value);
            break;
        }
    }
}
getNumber();






