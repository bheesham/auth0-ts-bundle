# auth0-ts-bundle

A quick demo for using TypeScript + webpack.

## Quickstart

```
# Install the dependencies:
npm install

# Run the tests:
npm run test

# NOTE: the tests will fail, because there are side-effects. To use this for
# realsies you'd need to mock stuff out (probably).

# And then build:
npm run build

# Upload the files somehow
# TODO(bhee)
```

And then, to verify, let's spin up a Node REPL:

```
Welcome to Node.js v18.20.5.
Type ".help" for more information.
> var x = require('./dist/first.js');
undefined
> x.onExecutePostLogin
[AsyncFunction: onExecutePostLogin]
```
