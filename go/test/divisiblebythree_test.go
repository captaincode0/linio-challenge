package test

import "testing"
import c "go-linio/core"

var THREE_TEST_SAMPLE []int = []int{3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48}

/**
 * [TestDivisibleByThree]
 * @param {*testing.T} t 	factored T (Test) interface to call methods using a pointer
 */
func TestDivisibleByThree(t *testing.T){
	var message string;

	for _, n := range THREE_TEST_SAMPLE{
		message = c.GetMessageByNumber(n)

		if message != "Linio"{
			t.Log("Expected Message: Linio")
			t.Log("Gotten Message: ", message)
			t.Error("Error: message gotten is not same in this case")
		}
	}
}