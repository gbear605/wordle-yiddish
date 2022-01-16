from bs4 import BeautifulSoup  # type: ignore
import requests
import re
from typing import Optional

import json

base = 'https://en.wiktionary.org/'
next_link: Optional[str] = '/wiki/Category:Yiddish_lemmas'

words = []

while next_link is not None:
	r = requests.get(base + next_link)
	text = r.text
	soup = BeautifulSoup(text)
	words.extend([tag.a['title'] for tag in soup.find_all('div', 'mw-category')[-1].find_all('li')])

	next_tag = soup.find('a', text = re.compile(r'next page'), attrs = {'title': 'Category:Yiddish lemmas'})
	if next_tag is None:
		next_link = None
	else:
		next_link = next_tag['href']

print(json.dumps(words, ensure_ascii=False))
