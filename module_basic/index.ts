import { studentage, studentName as name } from "./Student";//Can also use alias
import * as student from './Student'

function displayInfo(): void {
    console.log(`Srudent name is ${name} and student age is ${studentage}`)
    console.log(`Name: ${student.studentName} and age ${student.studentage}`)
}

displayInfo();