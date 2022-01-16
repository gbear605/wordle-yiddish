import json
import re

import random

import unicodedata

def is_diacritic(char):
	return unicodedata.category(char) == 'Mn'

non_letters = [' ', '.', '־', '״', '\'', '׳', ',', '-']

cleaned_words = []

chars = set()
with open("yiddish-words.json") as f:
	words = json.loads(f.read())
	
	for word in words:
		word = re.sub('ײִ', 'ײ', word)
		word = re.sub('וי', 'ױ', word)
		word = re.sub('ױִ', 'ױ', word)
		word = re.sub('וו', 'װ', word)
		word = re.sub('יי', 'ײ', word)

		word = re.sub('וּ', 'ו', word)
		word = re.sub('שׂ', 'ש', word)
		word = re.sub('ך', 'כ', word)
		word = re.sub('ף', 'פֿ', word)
		word = re.sub('ם', 'מ', word)
		word = re.sub('ן', 'נ', word)
		word = re.sub('ץ', 'צ', word)
		word = re.sub('פ', 'פּ', word)
		word = re.sub('פּּ', 'פּ', word)
		word = re.sub('פּֿ', 'פֿ', word)
		word = re.sub('יִ', 'י', word)
		word = re.sub('יַ', 'י', word)

		if all([non_letter not in word for non_letter in non_letters]) and len(''.join(ch for ch in word if not is_diacritic(ch))) == 5:
			cleaned_words.append(word)

		char_parts = []
		for c in word:
			if unicodedata.category(c) == 'Lo':
				if char_parts != []:
					chars.add(''.join(char_parts))
				char_parts = [c]
			elif is_diacritic(c):
				char_parts.append(c)
			elif c not in non_letters:
				print(c + ': ' + unicodedata.category(c))


#print(', '.join(sorted(chars)))  # all of the glyphs (ie. real Hebrew characters) in the short words
#print(', '.join(sorted(cleaned_words)))  # all of the short words

#print('  | "' + '"\n  | "'.join(sorted(chars)) + '"')  # Prints the list for statuses.ts
print('export const VALIDGUESSES = [\n  "' + '",\n  "'.join(sorted(cleaned_words)) + '",\n];')  # for validGuesses.ts
