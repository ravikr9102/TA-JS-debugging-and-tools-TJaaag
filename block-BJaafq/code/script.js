function test (message,callback){
    try{
        callback();
        console.log('yes', message);
    } catch (error) {
        console.error(error);
        console.log('No',message);
    }
}

function expect (actual) {
    return {
        toEqual: function(expected){
            if(actual !== expected) {
                throw new Error (`${actual} is not equal to ${expect}`)
            } 
        },
    };
}


// Add two numbers:

function addTwo(numA,numB){
    return numA + numB;
}

let result,expected;

function testAddTwo(){
     result = addTwo(2,12);
     expected = 16;
     expect(result).toEqual(expected)
}

test("adding 2 and 12",testAddTwo);



// Multiply two numbers:

function multiplyTwo(numA,numB){
    return numA * numB;
}

function testMultiplyTwo(){
    result = multiplyTwo(4,4);
    expected = 12;
    expect(result).toEqual(expected)
}

test("multiply 4 and 4",testMultiplyTwo);