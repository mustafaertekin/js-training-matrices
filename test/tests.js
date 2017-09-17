/**
 * Please use the file "js/functions.js" for your functions.
 *
 */
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

describe('Test Suite - Test your own functions with edge cases', () => {

    it('Addition of two matrices', function(){
        let result = matrix1.add(matrix2);
        result = result.toString();
        result.should.be.equal("-1,5,3,0,-1,5,5,7,-2");
    });
    
    it('Substraction of two matrices', function(){
        let result = matrix1.substract(matrix2);
        result = result.toString();
        result.should.be.equal("3,-1,3,0,1,5,3,-3,0");
    });
    
    
      
});