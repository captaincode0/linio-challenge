import unittest

from sys import path
from os import getcwd

path.insert(0, getcwd()+"/..")

from core import bizzfuzzlinio as b

both_divisible_test_sample = [k if k%3==0 and k%5==0 else None for k in range(1,101)]
three_divisible_test_sample = [k if k%3==0 and k%5>0 else None for k in range(1,101)]
five_divisible_test_sample = [k if k%3>0 and k%5==0 else None for k in range(1,101)]
message_on_both_case = "Linianos"
message_on_three_case = "Linio"
message_on_five_case = "IT"

class BizzFuzzLinioTest(unittest.TestCase):
	def test_divisible_by_both(self):
		for number in both_divisible_test_sample:
			if number != None:
				self.assertEquals(message_on_both_case, b.bizzfuzz.get_message_by_number(number))

	def test_divisible_by_three(self):
		for number in three_divisible_test_sample:
			if number != None:
				self.assertEquals(message_on_three_case, b.bizzfuzz.get_message_by_number(number))

	def test_divisible_by_five(self):
		for number in five_divisible_test_sample:
			if number != None:
				self.assertEquals(message_on_five_case, b.bizzfuzz.get_message_by_number(number))

if __name__ == '__main__':
	unittest.main()