//function signature
var userInfo1; //THis function must not receive any parameter and return anything
userInfo1 = function () {
    console.log("Subrata Biswas age is 26");
};
userInfo1();
var userInfo2; //THis function must receive name and age parameter and do not return anything
userInfo2 = function (name, age) {
    console.log("".concat(name, " is ").concat(age, " years old"));
};
userInfo2("Subrata Biswas", 26);
var userInfo3; //THis function must receive name and age parameter and do not return anything
userInfo3 = function (name, age) {
    return "".concat(name, " is ").concat(age, " years old");
};
console.log(userInfo3("Subrata Biswas", 26));
