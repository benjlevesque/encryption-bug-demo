This code intends to demo the runtime issue with the request encryption tools.

## How to use

1- Should work

```bash
yarn
yarn start
```

2- Should not work

```bash
docker build -t enc-test .
docker run -it --rm enc-test
```

Stack Trace

```
Error: WebCryptoAPI is not available
    at assert (/app/node_modules/@requestnetwork/utils/node_modules/eccrypto/browser.js:15:11)
    at exports.encrypt (/app/node_modules/@requestnetwork/utils/node_modules/eccrypto/browser.js:116:3)
    at Object.encryptWithPublicKey (/app/node_modules/@requestnetwork/utils/node_modules/eth-crypto/dist/lib/encrypt-with-public-key.js:20:34)
    at Object.<anonymous> (/app/node_modules/@requestnetwork/utils/src/crypto/ec-utils.ts:100:39)
```
