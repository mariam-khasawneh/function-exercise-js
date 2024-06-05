//Q1- Write a JavaScript function that reverses a numbe
function reverseNumber(num1) 
{
    num1 = num1 + "";
    num1 = num1.split("").reverse().join("");
    return num1;
}
console.log(reverseNumber(532443));


//Q2- loop that iterates from 0 to 15. odd or even
function loop15() {
    let str1 = "";
    for (i = 0; i <= 15; i++){
        if (i % 2 == 0) {
            str1 = `${str1}"${i} is Even" \n `;
        }
        else {
            str1 = `${str1}"${i} is Odd" \n `;
        }
    }
    return str1;
}
console.log(loop15());


//Q3- alphabetical order.
function alphabet(word) {
    word = word + "";
    word = word.toLowerCase();
    word = word.split("").sort().join("");
    return word;
}
console.log(alphabet("Orange"));


// Q4-  inserts dashes (-) between each even number.
function insertDashe(input) {
    let output = "";
    input = input + "";
    input = input.split("");
    for (i = 0; i <= input.length-1; i++){
        output = output +  input[i];
        if (i<input.length-1 && parseInt(input[i]) % 2 === 0 && parseInt(input[i + 1]) % 2 === 0) {
            output = output + "-";
        }
    }
    return output;
}
console.log(insertDashe(56025468988));


function isEven(str) {
    num = parseInt(str);
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function insertDashe(input) {
    let str = input.toString();
    let output = "";
    for (i = 0; i <= str.length - 1; i++){
        output = output + str[i];
        if (isEven(str[i]) && isEven(str[i + 1])) {
            output = output + "-";
        }
    }
    return output;
}
console.log(insertDashe(1205674894458490));


//Q5- Agechecker
function ageChecker(age) {
    let adult = "";
    (age >= 18) ? adult = `The user is Adult` : adult = `The user is Minor`;
    return adult;
}
console.log(ageChecker(17));
console.log(ageChecker(18));
console.log(ageChecker(19));


// //////////////////////////////////////////
