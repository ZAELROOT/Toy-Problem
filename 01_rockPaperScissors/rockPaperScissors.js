const rockPaperScissors = function (num) {
    // TODO: Your code here!
    let result = [];
    if (num === undefined) {
        num = 3;
    }
    let arr = new Array(num);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }

    while (true) {
        if (arr[arr.length - 1] === 3) {
            break;
        }
        let bucket = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                bucket.push('rock');
            }
            else if (arr[i] === 1) {
                bucket.push('paper');
            }
            else if (arr[i] === 2) {
                bucket.push('scissors');
            }
        }

        arr[0]++;
        arr = fixarray(arr);
        result.push(bucket);
    }

    return result;
};

function fixarray(arr) {
    let newarr = arr;
    let result = [];
    function recursive(array) {
        if (array.length === 1) {
            return result.push(array[0]);
        }
        else if (array[0] < 3) {
            for (let i = 0; i < array.length; i++) {
                result.push(array[i]);
            }
            return result;
        }
        else if (array[0] === 3) {
            array[0] = 0;
            array[1]++;
            result.push(array.shift());
            return recursive(array);
        }
    }
    recursive(newarr);
    return result;
}