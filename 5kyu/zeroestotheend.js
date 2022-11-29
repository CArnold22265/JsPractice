"use strict";

/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

const tester = [false, 1, 0, 0, 2, 3, 0, "a"];
const tester2 = [false, 1, 0, 1, 2, 0, 1, 3, "a"]; // returns[false,1,1,2,1,3,"a",0,0]

const moveZeroes = function (arr) {
  const zeroArr = [];
  const rest = [];

  arr.map((v, i, arr) => {
    v === 0 ? zeroArr.push(v) : rest.push(v);
  });
  console.log([false, 1, 1, 2, 1, 3, "a", 0, 0]);
  return [...rest, ...zeroArr];
};

moveZeroes(tester2);
