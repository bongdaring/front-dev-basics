/**
 * 자바스크립트 객체3: 확장
 * 
 */

var o = {
    name:'둘리',
    age:10
}

console.log("=== 확장(object 타입) =====");
o.another = {
    name:'마이콜',
    age:30,
    print: function(){
        console.log(this.name, this.age);
    }
};

console.log(o);
o.another.print();

