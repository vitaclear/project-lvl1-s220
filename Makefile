install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
run-even:
	npm run babel-node -- src/bin/brain-even.js
run-calc:
	npm run babel-node -- src/bin/brain-calc.js
publish:
	npm publish
lint:
	npm run eslint .
