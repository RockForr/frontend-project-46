lint:
	sudo npx eslint .

publish:
	npm publish --dry-run

install: install-deps
	npx simple-git-hooks

test:
	sudo npm test

test-coverage:
	sudo npm test -- --coverage --coverageProvider=v8

.PHONY: test	npx simple-git-hooks

install-deps:
	npm ci --legacy-peer-deps

.PHONY: test
