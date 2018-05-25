import IndexCss from './css/index.css';
import CommonCss from './css/common.scss';

//es6 module
import add from './js/add'; 
// common.js
const minus = require('./js/minus'); 
// AMD
require(['./js/muti'],function(muti){
    console.log('muti(3,4) = ' + muti(3,4));
});

console.log('add(3,4) = ' + add(3,4));
console.log('minus(7,4) = ' + minus(7,4));

// 测试 babel-loader
const NUM = 14;
let fun = () => {};
let arr = [1,2,3];
let arrB = arr.map(item => item * 2);
arr.includes(8);
console.log(new Set(arrB));

// 测试 typescript
import ts from './js/index.ts';