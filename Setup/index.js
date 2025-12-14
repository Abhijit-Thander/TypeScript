function exampleType(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
exampleType("hello");
exampleType(20);
/////////////////////////////////////////
var add = function (a, b) { return a + b; };
console.log(add(10, 30));
