interface IProperty<T>{
    count: (arr:Array<T>) => number;
}

class PrimeProperty implements IProperty<number>{
    #isPrime = (num:number) => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }

    count = (numbers:Array<number>) => {
        return numbers.filter(this.#isPrime).length;
    }
}

class PalindromeProperty implements IProperty<number>{
    count = (numbers:Array<number>) => {
        throw "not implemented";
    };
}
class Person{
    name:string;
    id:number;
    constructor(name:string, id:number){
        this.name = name;
        this.id=id;
    }
}
class PersonPalindromIdProperty implements IProperty<Person>{
    count = (persons:Array<Person>) => {
        const ids = persons.map((p:Person)=>p.id);
        return new PalindromeProperty().count(ids);
    }
}