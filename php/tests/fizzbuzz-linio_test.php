<?php
	declare(strict_types=1);

	use PHPUnit\Framework\TestCase;
	use Linio\Challenge\FizzBuzzLinio;

	class FizzBuzzLinioTest extends TestCase{
		const BOTH_CASE_TEST_SAMPLE 	= [15, 30, 45, 60, 75, 90];
		const THREE_CASE_TEST_SAMPLE 	= [3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48];
		const FIVE_CASE_TEST_SAMPLE 	= [5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100];

		public function testDivisibleByBoth():void{
			$message_expected = "Linianos";
			$message = "";

			foreach(self::BOTH_CASE_TEST_SAMPLE as $number){
				$message = FizzBuzzLinio::getMessageByNumber($number);

				$this->assertEquals($message, $message_expected);
			}
		}

		public function testDivisibleByThree():void{
			$message_expected = "Linio";
			$message = "";

			foreach(self::THREE_CASE_TEST_SAMPLE as $number){
				$message = FizzBuzzLinio::getMessageByNumber($number);

				$this->assertEquals($message, $message_expected);
			}
		}

		public function testDivisibleByFive():void{
			$message_expected = "IT";
			$message = "";

			foreach(self::FIVE_CASE_TEST_SAMPLE as $number){
				$message = FizzBuzzLinio::getMessageByNumber($number);

				$this->assertEquals($message, $message_expected);
			}
		}
	}