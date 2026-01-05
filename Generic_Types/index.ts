//For arrow function
// const printUserInfo = <X, Y>(userId: X, userName: Y)=>{}
function printUserInfo<X, Y>(userId: X, userName: Y) {
    console.log(`UserId is: ${userId} and name is ${userName}`);
}

//Generic type: The type can be any
printUserInfo(101, "Subrata");
printUserInfo("101", {name: "subrata"});
printUserInfo(null, 101);
printUserInfo({ id: 101}, null);