lint:
	sudo npx eslint .

publish:
	sudo npm publish --dry-run

install:
	sudo npm ci

test:
	sudo npm test

test-coverage:
	sudo npm test -- --coverage --coverageProvider=v8

gendiff:
	sudo node bin/gendiff.js
	