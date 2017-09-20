/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */
"use strict";
Array.prototype.add = function (mx) {
    let newMatrix = [[], [], []];
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < this[i].length; j++) {
            newMatrix[i][j] = this[i][j] + mx[i][j];
        }
    }
    return newMatrix;
}
Array.prototype.substract = function (mx) {
        let newMatrix = [[], [], []];
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < this[i].length; j++) {
                newMatrix[i][j] = this[i][j] - mx[i][j];
            }
        }
        return newMatrix;
    }
    // MULTIPLY
    //The number of columns of the 1st matrix must equal the number of rows of the 2nd matrix.
    //And the result will have the same number of rows as the 1st matrix, and the same number of columns as the 2nd matrix.

Array.prototype.multiply = function (mx) {
    var firstMatrix = [[],[],[]];
    var row = 0;
    var column = 0;
    for (row = 0; row < this.length; row++){
        for (column = 0; column < this.length; column++){
        firstMatrix[row].push(this[row][0]*mx[0][column]);
        }
    }
    console.log(firstMatrix);
    
    var secondMatrix = [[],[],[]];
    for (row = 0; row < this.length; row++){
        for (column = 0; column < this.length; column++){
        secondMatrix[row].push(this[row][1]*mx[1][column]);
        }
    }
    console.log(secondMatrix);
    
    var thirdMatrix = [[],[],[]];
    for (row = 0; row < this.length; row++){
        for (column = 0; column < this.length; column++){
        thirdMatrix[row].push(this[row][2]*mx[2][column]);
        }
    }
    console.log(thirdMatrix);
    
    return firstMatrix.add(secondMatrix).add(thirdMatrix);
}

Array.prototype.display = function (mx) {
    console.log(result);
}