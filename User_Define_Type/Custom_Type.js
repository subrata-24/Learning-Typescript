var user1;
user1 = { name: "Subrata Biswas", id: 1902014 };
var user2;
user2 = { name: "Sabuj Biswas", id: 1902045 };
var users = [];
users.push(user1);
users.push(user2);
console.log(users);
var request1;
request1 = "GET";
function makeRequest(requestName) {
    console.log(requestName);
}
makeRequest("POST"); // Without "POST" and "GET" it shows error
