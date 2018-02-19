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
run-newbalance:
	npm run babel-node -- src/bin/brain-newbalance.js
run-balance3:
	npm run babel-node -- src/bin/brain-balance3.js
run-balanceNum:
	npm run babel-node -- src/bin/brain-balanceNum.js
run-progression:
	npm run babel-node -- src/bin/brain-progression.js
run-prime:
	npm run babel-node -- src/bin/brain-prime.js
publish:
	npm publish
lint:
	npm run eslint .
