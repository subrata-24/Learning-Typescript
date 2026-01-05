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
