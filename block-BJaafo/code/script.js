function getFullName(firstName,lastName){
    return firstName + " " + lastName;
}

let result1 = getFullName('Arya','Stark');

let expected = 'Aryanstark';

if(result1 !== expected) {
    throw new Error(`${result1} is not equal to ${expected}`)
}


let result2 = getFullName('Ravi', 'Kumar');

let expected2 = 'John Snow';

if(result2 !== expected2) {
    throw new Error(`${result2} is not equal to ${expected2}`);
}


function getTotalAmount (amount,taxRate){
    return amount + (amount * taxRate)
}


let total = getTotalAmount(32,54);

let expected3 = 34;

if(total !== expected3) {
    throw new Error(`${total} is not equal to ${expected3}`);
}


let total2 = getTotalAmount(30,64);

let expected4 = 89;

if(total !== expected4) {
    throw new Error(`${total2} is not equal to ${expected4}`);
}