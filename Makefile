install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
run-even:
	npm run babel-node -- src/bin/brain-even.js
run-calc:
	npm run babel-node -- src/bin/brain-calc.js
run-gcd:
	npm run babel-node -- src/bin/brain-gcd.js
run-balance:
	npm run babel-node -- src/bin/brain-balance.js
run-progression:
	npm run babel-node -- src/bin/brain-progression.js
publish:
	npm publish
lint:
	npm run eslint .
