var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//For arrow function
// const printUserInfo = <X, Y>(userId: X, userName: Y)=>{}
function printUserInfo(userId, userName) {
    console.log("UserId is: ".concat(userId, " and name is ").concat(userName));
}
//Generic type: The type can be any
printUserInfo(101, "Subrata");
printUserInfo("101", { name: "subrata" });
printUserInfo(null, 101);
printUserInfo({ id: 101 }, null);
//********** */
var addId = function (obj) {
    var id = Math.floor(Math.random() * 1000);
    return __assign(__assign({}, obj), { id: id });
};
var user = addId({
    name: "Subrata",
    age: 20
});
console.log(user.name);
//If we do not write generics type then if I give dot(.) after user then it can not recognize the other properties except id.
// Wrong usage: passing a string (not an object)
var user2 = addId("Subrata");
console.log(user2);
var response = {
    status: 200,
    type: "Object",
    data: {
        name: "Subrata",
        age: 20
    }
};
