// Task 1
function concat(first: string, second: string): string {
    return first + second;
}
concat('Hello ', 'World');


// Task 2
type strOrNum = (string | number);

interface hometask {
    howIDoIt: string;
    simeArray: strOrNum[]; 
    withData: [{howIDoIt: string, simeArray: strOrNum[]}];
}

const myHometask:hometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}


// Task 3
interface MyArray<T> {
    [N: number]: T;
    
    reduce(fn: (previousValue: T, currentValue: T, index: number, array: T[]) => T): T;
}