# Challenge - Backend Developer
Write a program that prints all the numbers from 1 to 100. However, for
multiples of 3, instead of the number, print "Linio". For multiples of 5 print
"IT". For numbers which are multiples of both 3 and 5, print "Linianos".

But here's the catch: you can use only one `if`. No multiple branches, ternary
operators or `else`.

## Requirements
* Maximum of 1 if
* You can't use `else`, `else if` or ternary
* Unit tests
* Feel free to apply your SOLID knowledge
* You can write the challenge in any language you want. Here at Linio we are
big fans of PHP, Kotlin and TypeScript

## Learning

- Kotlin: I don't know nothing about this language, but i know Java well.
- TypeScript: No idea, but i know Flow from facebook and i now use with babeljs.

## Results

Solution was written in following languages:

1. Go
2. JS/TypeScript (Node project).
3. Kotlin.
4. Php 7 standalone with PhpUnitTest.
5. SQL :) [Just for Fun] without Unit Testing, using procedural SQL in MySQL server, can check generated [output](https://github.com).

## Solution

I wrote the algorithm at the beginning using common javascript, without tests and this is the eloquent solution with program constraints.

```js
let messages            = ["IT", "Linio", "Linianos"];
let isDivisibleByBoth   = 0;
let isDivisibleByThree  = 0;

for(let i=1; i<=100; i++){
    isDivisibleByBoth   = i%3==0 & i%5==0;
    isDivisibleByThree  = i%3==0 & i%5>0;

    if(i%3==0 || i%5==0){
        console.log(messages[(isDivisibleByBoth*2)+isDivisibleByThree]);
        continue;
    }

    console.log(i);
}
```

Cases that i considered:

- is divisible by both: when number can be divided between three or five.
- is divisible by three: when number just can be divided by three.