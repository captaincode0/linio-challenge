var b = require("../core/bizzfuzz-linio");

var TEST_DATA_SAMPLE = {bothCase: [], threeCase: [], fiveCase: []}
var LOOP_LIMIT = 100;

function fill_data(){
	for(let i=1; i<=LOOP_LIMIT; i++){
		if(i%3==0 || i%5==0){
			if(i%3==0 && i%5==0)
				TEST_DATA_SAMPLE.bothCase.push(i);
			else if(i%3==0 && i%5>0)
				TEST_DATA_SAMPLE.threeCase.push(i);
			else if(i%5==0 && i%3>0)
				TEST_DATA_SAMPLE.fiveCase.push(i);
		}

		if(i==LOOP_LIMIT)
			print_data();
	}
}

function print_data(){
	console.log("Divisible By Both Case Data: "+TEST_DATA_SAMPLE.bothCase);
	console.log("Divisible By Three Case Data: "+TEST_DATA_SAMPLE.threeCase);
	console.log("Divisible By Five Case Data: "+TEST_DATA_SAMPLE.fiveCase);
}

fill_data();

test("divisible by both test", function(){
	for(let n=0; n<TEST_DATA_SAMPLE.bothCase.length; n++){
		expect("Linianos")
			.toBe(b.getMessageByNumber(TEST_DATA_SAMPLE.bothCase[n]));
	}
});

test("divisible by five test", function(){
	for(let n=0; n<TEST_DATA_SAMPLE.threeCase.length; n++){
		expect("Linio")
			.toBe(b.getMessageByNumber(TEST_DATA_SAMPLE.threeCase[n]));
	}
});

test("divisible by three test", function(){
	for(let n=0; n<TEST_DATA_SAMPLE.fiveCase.length; n++){
		expect("IT")
			.toBe(b.getMessageByNumber(TEST_DATA_SAMPLE.fiveCase[n]));
	}
});