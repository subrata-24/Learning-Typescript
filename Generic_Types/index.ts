//For arrow function
// const printUserInfo = <X, Y>(userId: X, userName: Y)=>{}
function printUserInfo<X, Y>(userId: X, userName: Y) {
    console.log(`UserId is: ${userId} and name is ${userName}`);
}

//Generic type: The type can be any
printUserInfo(101, "Subrata");
printUserInfo("101", {name: "subrata"});
printUserInfo(null, 101);
printUserInfo({ id: 101 }, null);


//********** */
const addId = <T>(obj: T)=>{
    let id = Math.floor(Math.random() * 1000);
    return {...obj, id};
}

const user = addId({
    name: "Subrata",
    age: 20
})
console.log(user.name);
//If we do not write generics type then if I give dot(.) after user then it can not recognize the other properties except id.

// Wrong usage: passing a string (not an object)
const user2 = addId("Subrata");  
console.log(user2);
// Without constraints, TypeScript allows this usage, but logically it's wrong
// because "Subrata" is not an object. This is why we might need constraints.

// To prevent wrong usage, we can use:
// <T extends object>
// which forces the generic type T to be an object only.


//Generic with object
interface APIResponse<T>{
    status: number,
    type: string,
    data: T,//we use this because we do not know what kind of data is actually we get by API.So data can take any type of data
}

const response: APIResponse<object> = {
    status: 200,
    type: "Object",
    data: {
        name: "Subrata",
        age: 20
    }
}