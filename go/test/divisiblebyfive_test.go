package test

import "testing"
import c "go-linio/core"

var FIVE_TEST_SAMPLE []int = []int{5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100}

/**
 * [TestDivisibleByFive]
 * @param {*testing.T} t 	factored T (Test) interface to call methods using a pointer
 */
func TestDivisibleByFive(t *testing.T){
	var message string;

	for _, n := range FIVE_TEST_SAMPLE{
		message = c.GetMessageByNumber(n)

		if message != "IT"{
			t.Log("Expected Message: IT")
			t.Log("Gotten Message: ", message)
			t.Error("Error: message gotten is not same in this case")
		}
	}
}