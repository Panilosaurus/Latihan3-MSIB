function deretAritmatika(numbers) {
    let diff = numbers[1] - numbers[0];
    for (let i = 0; i < numbers.length-1; i++) {
        if (numbers[i+1] - numbers[i] !== diff) {
            return false;
        }
    }
    return true;
}

console.log(deretAritmatika([1,2,3,4,5,6]));
console.log(deretAritmatika([2,4,6,12,24]));
console.log(deretAritmatika([2,4,6,8]));
console.log(deretAritmatika([2,6,18,54]));
console.log(deretAritmatika([1,2,3,4,7]));
