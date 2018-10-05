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