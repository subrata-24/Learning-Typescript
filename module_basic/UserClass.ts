export class User{
    userName: string;
    age: number;
    
    constructor(name: string, age: number){
        this.userName = name;
        this.age = age;
    }

    display(): void{
        console.log(`Username is ${this.userName} and age is ${this.age}`);
    }
};


