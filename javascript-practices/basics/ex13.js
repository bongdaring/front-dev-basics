/**
 * string primitive type
 * String 객체 함수: String.prototype.*
 * 
 */

var str1 = 'Hello Wolrd';

for(var i = 0; i <  str1.length(); i++){
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = 'hello';
var str3 = 'world';
var str4 = str2 + ' ' + str3;
console.log(str4);

// casting
var str6 = "5" + 5;
console.log(str5);

var str6 = "boolean" + true;
console.log(str6);

// 객체 함수
var str7 = "string 1 string2 string3";

var index = str7.indexOf('string2'); // 8
console.log(index);

index = str7.indexOf('string4'); // -1
console.log(index);

var str8 = str7.substring(10 /*first Index*/, 13/* last index-1 */);
console.log(str8);

var a = str7.split(" ");
console.log(a);
