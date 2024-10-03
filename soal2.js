function threeStepsAB(text) {
    let kata = {};

    for (let i = 0; i < text.length; i++) {
        if (text[i] != ' ') {
            kata += text[i];
        }
    }

    for (let j = 0; j < kata.length; j++) {
        if (kata[j] == 'a') {
            if (kata[j + 3] == 'b' || kata[j + 3] == 'a') {
                return true;
            }
        } 
        if (kata[j] == 'b') {
            if (kata[j + 3] == 'a' || kata[j + 3] == 'b') {
                return true;
            }
        }
    }
    return false;
}
// TEST CASES

console.log(threeStepsAB('lane borrowed')); // true

console.log(threeStepsAB('i am sick')); // false

console.log(threeStepsAB('you are boring')); // true

console.log(threeStepsAB('barbarian')); // true

console.log(threeStepsAB('bacon and meat')); // false