"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, age) {
        this.userName = name;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("Username is ".concat(this.userName, " and age is ").concat(this.age));
    };
    return User;
}());
exports.User = User;
;
