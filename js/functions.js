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


/*******************************************/
/**********ITERATIVE SOLUTIONS*************/
/*****************************************/


// First iteration

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


//Second iteration: This iteration summarizes a lot, but has a lot of static parts as well
Array.prototype.multiply_v2 = function (mx) {
    let product = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    for (let h = 0; h < this.length; h++) {
        const partialMatrix = [[], [], []];
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this[i].length; j++) {
                partialMatrix[i].push(this[i][h] * mx[h][j]);
            }
        }
        product = product.add(partialMatrix);
    }
    return product;
};

//third iteration: This iteration has a more dynamic code (dynamic lenghts etc.) + every function does something specific
//which helps to keep overview over the parts of the code
function partialSum_v3(product, partialMatrix) {
    if (product !== null) {
        product = product.add(partialMatrix);
    } else {
        product = partialMatrix;
    }
    return product;
}

function calculateColumns_v3(i, partialMatrix, h, mx) {
    let j;
    for (j = 0; j < this[i].length; j++) {
        partialMatrix[i].push(this[i][h] * mx[h][j]);
    }
    return j;
}
function calculateRows_v3(partialMatrix, h, mx) {
    let i;
    for (i = 0; i < this.length; i++) {
        partialMatrix.push([]);
        calculateColumns_v3.call(this, i, partialMatrix, h, mx);
    }
    return i;
}

function summarizePartialProducts_v3(mx, product) {
    for (let h = 0; h < this.length; h++) {
        const partialMatrix = [];
        calculateRows_v3.call(this, partialMatrix, h, mx);
        product = partialSum_v3(product, partialMatrix);
    }
    return product;
}

Array.prototype.multiply_v3 = function (mx) {
    return summarizePartialProducts_v3.call(this, mx, null);
};

//Fourth iteration: We keep optimizing, make the code more readable, optimize routines where we can
function partialSum_v4(product, partialMatrix) {
    return product !== null ? product.add(partialMatrix) : partialMatrix;
}
function calculateColumns_v4(row, partialMatrix, dimension, mx) {
    partialMatrix.push([]);
    for (let col = 0; col < this[row].length; col++) {
        partialMatrix[row].push(this[row][dimension] * mx[dimension][col]);
    }
}
function calculateRows_v4(partialMatrix, dimension, mx) {
    for (let row = 0; row < this.length; row++) {
        calculateColumns_v4.call(this, row, partialMatrix, dimension, mx);
    }
    return partialMatrix;
}
function summarizePartialProducts_v4(mx) {
    let product = null;
    for (let dimension = 0; dimension < this.length; dimension++) {
        product = partialSum_v4(product, calculateRows_v4.call(this, [], dimension, mx));
    }
    return product;
}

Array.prototype.multiply_v4 = function (mx) {
    return summarizePartialProducts_v4.call(this, mx);
};

//Fith iteration: What could be next? For example, refactoring all the helper codes into own file!
//That's basically the spirit, how do we make the code simpler, more manageable, more performant etc.
//Always think about the cycle
// 1) Solve the problem as fast as possible,
// 2) Refactor your code (rename variables, extract to functions etc.),
// 3)optimize performance
// 4) Start over

/********************************************/
/**********MAP REDUCE SOLUTIONS*************/
/******************************************/

function reverseRowsAndColumns(matrix) {
    let transformedMx = [];
    matrix.map((row) => {
        row.map((val, cIndex) => {
        if (!transformedMx[cIndex]) transformedMx.push([]);
    transformedMx[cIndex].push(val);
});
});
    return transformedMx;
}

// First iteration: map reduce solution
Array.prototype.multiply_v5 = function (mx) {
    let transformedMx = reverseRowsAndColumns(mx);
    return this.map((row)=>{
            return row.map((rowValue, rowIndex)=>{
                return transformedMx[rowIndex].map((columnValue,columnIndex)=>{
                    return row[columnIndex] * columnValue;
}).reduce((acc, val)=>{
        return acc + val;
});
});
});
};

//Second iteration: map reduce solution
function gatherRowColumnProducts(mx, rowIndex, row) {
    return reverseRowsAndColumns(mx)[rowIndex].map((columnValue, columnIndex) => {
        return row[columnIndex] * columnValue;
    });
}
function calculateProductRow(factorRow, factorMatrice) {
    return factorRow.map((rowValue, rowIndex) => {
        return gatherRowColumnProducts(factorMatrice, rowIndex, factorRow)
            .reduce((accumulatedValue, currentValue) => {
                return accumulatedValue + currentValue;
            });
    });
}
Array.prototype.multiply_v6 = function (factorMatrice) {
    return this.map((factorRow)=>{
        return calculateProductRow(factorRow, factorMatrice);
    });
};

Array.prototype.display = function () {
    console.log(this);
};
Array.prototype.display = function (mx) {
    console.log(result);
}