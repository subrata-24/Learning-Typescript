"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student"); //Can also use alias
var student = require("./Student");
function displayInfo() {
    console.log("Srudent name is ".concat(Student_1.studentName, " and student age is ").concat(Student_1.studentage));
    console.log("Name: ".concat(student.studentName, " and age ").concat(student.studentage));
}
displayInfo();
