<?php
	declare(strict_types=1);

	namespace Linio\Challenge;

	/**
	 * @class 	FizzBuzzLinio
	 * @desc 	Contains challenge solved algorithm
	 */
	final class FizzBuzzLinio{
		const MESSAGES 	= ["IT", "Linio", "Linianos"];
		const RUN_UNTIL = 100;

		/**
		 * [run starts the algorithm]
		 */
		public static function run():void{
			$is_divisible_by_both;
			$is_divisible_by_three;

			for($i=1;$i<=self::RUN_UNTIL;$i++){
				$is_divisible_by_both = (int)($i%3==0 && $i%5==0);
				$is_divisible_by_three = (int)($i%3==0 && $i%5>0);

				if($i%3==0 || $i%5==0){
					printf("%s \n", self::MESSAGES[($is_divisible_by_both*2)+$is_divisible_by_three]);
					continue;
				}

				printf("%d \n", $i);
			}
		}

		/**
		 * [getMessageByNumber select the message with given number following problem constraints]
		 * @param  int    $n
		 * @return string
		 */
		public static function getMessageByNumber(int $n):string{
			return ($n%5==0 || $n%3==0)?self::MESSAGES[(((int)($n%3==0 && $n%5==0))*2)+((int)($n%3==0 && $n%5>0))]:((string)$n);
		}
	}