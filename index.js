// console.log('Hello from JavaScript')

// var divQuotient = 66 / 33;

// console.log(divQuotient)
// console.log(++divQuotient);
// console.log(divQuotient);
// console.log(--divQuotient);

// var arr = [['John', 69], ['op', 32]];

// var delArr = arr.shift();

// console.log(delArr);
// console.log(arr);

// function localScope() {
//     var myVar = 5;
//     console.log(myVar);
// }

// localScope();
// console.log(myVar);

function nextElement(arr, item) {
    arr.push(item);
    return arr.shift();
}

var arr = [1, 2, 3, 4, 5]

// console.log('Before: ' + JSON.stringify(arr));
// console.log('Deleted: ' + nextElement(arr, 6));
// console.log('After: ', JSON.stringify(arr));

function isItTrue(statement) {
    if (statement) {
        return 'Yes, it is true!'
    } else {
        return 'No, it is false.'
    }
}

// console.log(isItTrue(true));

function checkEquality(char1, char2) {
    if (char1 !== char2) {
        return 'Equal';
    } else {
        return 'Not equal';
    }
}

// console.log(checkEquality(3, '3'));

function testVal(val) {
    switch(val) {
        case 1:
            return 'alpha';
        case 2:
            return 'beta';
        case 3:
            return 'gamma';
    }
}

console.log(testVal(2));