/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */
 
"use strict";

Array.prototype.add = function (mx){
    let newMatrix = [[],[],[]];
    for (var i = 0; i < this.length; i++){
        for (var j=0; j < this[i].length; j++){
            newMatrix[i][j] = this[i][j] + mx[i][j];
        }
    }
    return newMatrix;
}

Array.prototype.substract = function (mx){
    let newMatrix = [[],[],[]];
    for (var i = 0; i < this.length; i++){
        for (var j=0; j < this[i].length; j++){
            newMatrix[i][j] = this[i][j] - mx[i][j];
        }
    }
    return newMatrix;
}

Array.prototype.multiply = function multiply(mx){}

Array.prototype.display = function display(){}
