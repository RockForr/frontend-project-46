lint:
	sudo npx eslint .

publish:
	sudo npm publish --dry-run

install: install-deps
	sudo npx simple-git-hooks

test:
	sudo npm test

test-coverage:
	sudo npm test -- --coverage --coverageProvider=v8

.PHONY: test	sudo npx simple-git-hooks

install-deps:
	sudo npm ci --legacy-peer-deps

.PHONY: test
