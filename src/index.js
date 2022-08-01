// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let sortArray = [];
    matrix.forEach((value, ind) => {
        if (ind % 2 != 0) {
            value.sort((a, b) => b - a);
        }
        sortArray.push(...value);
    });
    return sortArray;
};