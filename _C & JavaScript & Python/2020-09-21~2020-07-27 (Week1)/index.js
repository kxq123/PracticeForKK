// console.log("hello" + 1 + false +"he")
// console.log(1+"2")
// console.log(3*"2.5")

// console.log("HelloWorld")

var Numbers = ["Molly", "Jack", "Job", "Mike"];
// console.log(Numbers.length) //How much items in array

for (var i = 0; i < Numbers.length; i++) {
    // console.log(Numbers[i]);
}

var Numbers = ["Molly", "Jack", "Job", "Mike"];
function myfunction(array) {
    var h = []
    for (var i = 0; i < array.length; i++) {

        var element = array[i];
        var prefix = element[0];
        h.push(prefix);
    }
    return h;

}
// console.log(myfunction(Numbers))

// Input:  [1, 2, 5, 6, 79, 1]
// Output:  [3, 11, 80]
var Input = [1, 2, 5, 6, 79, 1]
function num(array) {
    var m = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i] + array[i + 1];
        m.push(element);
        i = i + 1;
    }
    return m;
}
// console.log(num(Input));

// Input:  [1, 2, 5, 6, 79, 1]
// Output:  [2, 81, 11]
var Input2 = [1, 2, 5, 6, 79, 1];
function myfunction2(array2) {
    var n = [];
    for (var i = 0; i < array2.length/2; i++) {
        var num2 = array2[i] + array2[array2.length - (i + 1)]
        n.push(num2);

    }
    return n;

}
//console.log(myfunction2(Input2));  //为什么是打印input2呢？而不是n 或者别的呢？



// cars=["BMW","Volvo","Saab","Ford"];
// for (var i=0;i<cars.length;i++){
// 	document.write(cars[i] + "<br>");
// }


