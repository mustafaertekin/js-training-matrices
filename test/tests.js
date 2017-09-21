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
    
    it('Multiply of two matrices', function(){
        let result = matrix1.multiply(matrix2);
        result = result.toString();
        result.should.be.equal("1,16,-3,5,25,-5,-9,5,1");
    });
    
      it('Multiply of two matrices v2', function(){
        let result = matrix1.multiply_v2(matrix2);
        result = result.toString();
        result.should.be.equal("1,16,-3,5,25,-5,-9,5,1");
    });
    
    it('Multiply of two matrices v3', function(){
        let result = matrix1.multiply_v3(matrix2);
        result = result.toString();
        result.should.be.equal("1,16,-3,5,25,-5,-9,5,1");
    });
    
    it('Multiply of two matrices v4', function(){
        let result = matrix1.multiply_v4(matrix2);
        result = result.toString();
        result.should.be.equal("1,16,-3,5,25,-5,-9,5,1");
    });
    
    it('Multiply of two matrices v5', function(){
        let result = matrix1.multiply_v5(matrix2);
        result = result.toString();
        result.should.be.equal("1,16,-3,5,25,-5,-9,5,1");
    });
    
    it('Multiply of two matrices v6', function(){
        let result = matrix1.multiply_v6(matrix2);
        result = result.toString();
        result.should.be.equal("1,16,-3,5,25,-5,-9,5,1");
    });
      
});