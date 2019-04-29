#alethio-freestyle api

> client-side app to monitor an ETH account using Alethio API.
(https://api.aleth.io/v1/docs#)

## Setup and Run

```
npm i
```
```
tsc
```
```
npm start
```

## Further development

This app runs with Typescript and webpack-dev-server. 
The best for development is to have three terminals open. In one, we run webpack-dev-server with `npm start`. In the second one we transpile automatically any changes in our root ts files with `tsc -w`. In the third one we transpile and minify the app.ts file also automatically with `webpack -w`. The webpack-dev-server will also restart by itself every time it detects these changes.

## Usage

Go to http://localhost:8080 and enter in the input box the ETH account you would like to monitor.

## Recommended Accounts:

Good to check the transactions chart: `0xd73953bc13c031459f3856a9a5adce36bed18fdc`

Good to check the contract messages: `0x4Cf890695E2188a124495EbC3b1Ec6341F21C9CF`