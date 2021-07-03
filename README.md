# Discord Alert With Bitbucket Web Hooks

## LUL

> required `pnpm`

## Install

```bash
make install-all
```

## Build

```bash
make compile-all
```

## Test Local With Bitbucket

> required `ngrok`

1. create discord webhooks [📌 here](https://discordjs.guide/popular-topics/webhooks.html#creating-webhooks-through-server-settings)
2. paste bot_id & bot_token in env
3. run app with ngrok
4. enable bitbucket webhooks [📌 here](https://support.atlassian.com/bitbucket-cloud/docs/manage-webhooks/)
5. add url from ngrok to bitbucket then choose merged
6. make pr and see the result in discord!!

![example](./example.png?raw=true "example")
