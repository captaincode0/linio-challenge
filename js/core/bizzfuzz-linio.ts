class BizzFuzzLinio{
	messages: Array<string>;

	constructor(){
		this.messages = ["IT", "Linio", "Linianos"];
	}

	/**
	 * [run executes bizz fuzz linio algorithm]
	 */
	run():void{
		let isDivisibleByBoth: number = 0;
		let isDivisibleByThree: number = 0;

		for(let i=1; i<=100; i++){
			isDivisibleByBoth = Number(i%3==0 && i%5==0);
			isDivisibleByThree = Number(i%3==0 && i%5>0);

			if(i%3==0 || i%5==0){
				console.log(this.messages[(isDivisibleByBoth*2)+isDivisibleByThree]);
				continue;
			}

			console.log(i)
		}
	}

	/**
	 * [getMessageByNumber given one number gets the message]
	 */
	getMessageByNumber(n:number):string{
		return (n%3==0 || n%5==0)?this.messages[(Number(n%3==0 && n%5==0)*2)+Number(n%3==0 && n%5>0)]:String(n);
	}
}