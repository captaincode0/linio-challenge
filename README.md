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
5. SQL :) [Just for Fun] without Unit Testing, using procedural SQL in MySQL server, can check generated [output](https://github.com/captaincode0/linio-challenge/blob/master/output.txt).
6. Python.

## Solution

I wrote the algorithm at the beginning using common javascript, without tests and this is the eloquent solution with program constraints.

```js
const messages          = ["IT", "Linio", "Linianos"];
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

**This is not one documentable solution, its like not-readable for humans code:**

```js
const messages = ["IT", "Linio", "Linianos"];

for(let i=1; i<=100; i++){
    if(i%3==0 || i%5==0){
        console.log(messages[((i%3==0 & i%5==0)*2)+(i%3==0 & i%5>0)]);
        continue;
    }

    console.log(i);
}
```

Cases that i considered:

- is divisible by both: when number can be divided between three or five.
- is divisible by three: when number just can be divided by three.

I implements one message structure, to get messages with the following equation `x(n)*2 + y(n) = Mi`, where `n` is a number between 0 and 100, thus `x` and `y` are Real functions.

- `1:    true`,
- `0:    false`
- `Mi:   Message Index`
- `x(n): n%3==0 & n%5 == 0`
- `y(n): n%3==0 & n%5>0`

Message Index|Message
--|--
0|IT
1|Linio
2|Linianos

I will test with following numbers:

- 15: Divisible by both case.
- 6: Divisible by three case.
- 5: Divisible by five case.

n|x|y|result (Mi=2x+y)|Message
--|--|--|--|--
**15**|15%3==0 & 15%5==0 => 1 & 1 => **1** | 15%3==0 & 15%5>0 => 1 & 0 => **0** | (1*2)+0 => **2** | Linianos
**6**|6%3==0 & 6%5==0 => 1 & 0 => **0** | 6%3==0 & 6%5>0 => 1 & 1 => **1** | (0*2)+1 => **1** | Linio
**5**|5%3==0 & 5%5==0 => 0 & 1 => **0** | 5%3==0 & 5%5>0 => 0 & 0 => **0** | (0*2)+0 => **0** | IT

> I use `2` on equation cause x represent both cases.

## Testing

I wrote following function to get message by one number, used to generate output in unit testing, and make assertion tests.

```js
const messages = ["IT", "Linio", "Linianos"];

function getMessageByNumber(n){
    return (n%3==0 || n%5==0)?messages[((n%3==0&n%5==0)*2)+(n%3==0&n%5>0)]:n;
}
```


