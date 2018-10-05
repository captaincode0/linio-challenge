package core

import "fmt"
import u "go-linio/util"
import "strconv"

/**
 * [LOOP_LIMIT how many times to iterate]
 * @type {int}
 */
const LOOP_LIMIT int = 100

/**
 * [string stores all posible outputs by case]
 * @type {[]string}
 */
var messages [3]string = [3]string{"IT", "Linio", "Linianos"}

/**
 * [isDivisibleByThree]
 * @type {int}
 */
var isDivisibleByThree uint8 = 0

/**
 * [isDivisibileByBoth]
 * @type {int}
 */
var isDivisibleByBoth uint8 = 0

/**
 * [FizzBuzzLinio function used to run linio challenge algorithm]
 */
func FizzBuzzLinio(){
	for i:=1; i<=LOOP_LIMIT; i++{
		isDivisibleByBoth 	= u.BoolToInt(i%3==0 && i%5==0)
		isDivisibleByThree 	= u.BoolToInt(i%3==0 && i%5>0)

		if i%3==0 || i%5==0{
			fmt.Println(messages[(isDivisibleByBoth*2)+isDivisibleByThree])
			continue
		}

		fmt.Println(i)
	}
}

/**
 * [GetMessageByNumber retrieves string from one number if is in case]
 * @param number 	int
 * @returns string
 */
func GetMessageByNumber(n int)string{
	if(n%3==0 || n%5==0){
		return messages[(u.BoolToInt(n%3==0 && n%5==0)*2)+u.BoolToInt(n%3==0 && n%5>0)]
	}

	return strconv.Itoa(n);
}