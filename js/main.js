/**
 * main.js is the entry point to your program.
 * You find the program logic, data structures and function calls in this file 
 */

"use strict";

let matrix1 = 
    [
        [1, 2, 3],
        [0, 0, 5],
        [4, 2, -1]
    ];

let matrix2 = 
    [
        [-2, 3, 0],
        [0, -1, 0],
        [1, 5, -1]
    ];


// 01: add and display
matrix1.add(matrix2).display();

// 02: substract and display
matrix1.substract(matrix2).display();

// 03: multiply and display
matrix1.multiply(matrix2).display();