const firstNonRepeatedCharacter = function (string) {
    // TODO: Your code here!
    let arr = string.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] && count(arr, arr[i + 1]) < 2) {
            return arr[i + 1];
        }
    }
};

function count(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }
    return count;
}
