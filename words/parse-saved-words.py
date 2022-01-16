import json
import re

import random

import unicodedata

cleaned_words = []

chars = set()
with open("yiddish-words.json") as f:
	words = json.loads(f.read())
	
	for word in words:
		word = re.sub('װ', 'וו', word)
		word = re.sub('ײ', 'יי', word)

		if ' ' not in word and '.' not in word and len(''.join(ch for ch in word if unicodedata.combining(ch) == 0)) == 5:
			word = re.sub('וּ', 'ו', word)
			word = re.sub('שׂ', 'ש', word)
			word = re.sub('ך', 'כ', word)
			word = re.sub('ף', 'פֿ', word)
			word = re.sub('ם', 'מ', word)
			word = re.sub('ן', 'נ', word)
			word = re.sub('ץ', 'צ', word)

			#print(list(word))
			#print(word)
			#word = ''.join([c for c in word if unicodedata.category(c) != 'Mn'])
			cleaned_words.append(word)
			for c in word:
				if unicodedata.category(c) == 'Lo':
					chars.add(c)


#print(sorted(chars))
#random.shuffle(cleaned_words)
print(', '.join(cleaned_words))