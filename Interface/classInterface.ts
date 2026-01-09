// Interface representing the structure of a Player object
// Any class that implements this interface must follow this shape
interface isPlayer {
    name: string;            
    readonly country: string; 
    play(): void;            
    getProperty(): number;   
}

// Class Player implements the isPlayer interface
// This means Player MUST include all properties & methods defined in isPlayer
class Player implements isPlayer {
    constructor(
        public name: string,
        readonly country: string,
        private age: number
    ) { }

    // Must implement getProperty() because interface requires it
    // Returns a private property (age)
    getProperty(): number {
        return this.age;
    }

    // Must implement play() because interface requires it
    play(): void {
        console.log(`${this.country} player ${this.name} playing at age ${this.age}`);
    }
}

// Example usage:
// const p1 = new Player("Mashrafi", "Bangladesh", 38);
// p1.play();
// console.log(p1.getProperty());

//This is also possible
let p1: isPlayer;
p1=new Player("Mashrafi", "Bangladesh", 38)
