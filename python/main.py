from sys import path
from os import getcwd

path.insert(0, getcwd())

if __name__ == '__main__':
	from core import bizzfuzzlinio as b

	print "[+] Running program"
	b.bizzfuzz.run()