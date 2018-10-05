class BizzFuzzLinio:
	def __init__(self):
		self.messages = ["IT", "Linio", "Linianos"]

	def run(self):
		is_divisible_by_three = 0
		is_divisible_by_both = 0

		for i in range(1,101):
			is_divisible_by_both = i%3==0 and i%5==0
			is_divisible_by_three = i%3==0 and i%5>0

			if i%3==0 or i%5==0:
				print self.messages[(is_divisible_by_both*2)+is_divisible_by_three]
				continue

			print i

	def get_message_by_number(self, n):
		if n%3==0 or n%5==0:
			return self.messages[((n%3==0 and n%5==0)*2)+(n%3==0 and n%5>0)]

		return n

bizzfuzz = BizzFuzzLinio()