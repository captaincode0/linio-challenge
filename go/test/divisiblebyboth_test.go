package test

import "testing"
import c "go-linio/core"

var BOTH_TEST_SAMPLE []int = []int{15, 30, 45, 60, 75, 90}

/**
 * [TestDivisibleByBoth]
 * @param {*testing.T} t 	factored T (Test) interface to call methods using a pointer
 */
func TestDivisibleByBoth(t *testing.T){
	var message string;

	for _, n := range BOTH_TEST_SAMPLE{
		message = c.GetMessageByNumber(n)

		if message != "Linianos"{
			t.Log("Expected Message: Linianos")
			t.Log("Gotten Message: ", message)
			t.Error("Error: message gotten is not same in this case")
		}
	}
}