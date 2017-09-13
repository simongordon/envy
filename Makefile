
all: ts pug

ts:
	tsc
pug:
	pug src --out target

install: install-ts install-pug

install-ts:
	npm install -g typescript

install-pug:
	npm install -g pug-cli
