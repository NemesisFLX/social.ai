### Run package from source

```git clone https://github.com/NemesisFLX/social.ai.git```
```npm i```
```node extractTwitter.js```

'extractTwitter.js' allows you to add the mongodb port with:

```node extractTwitter.js 32678```

### Run from npm

```npm install twitterextractor```
```node extractTwitter.js 32678```

### Configure your environment

Set environment variables in windows:
https://www.computerhope.com/issues/ch000549.htm

Set environment variables in linux:
```vim ~/.profile```
```export TWITTER_BLA_BLA=XXXXXXXX```

### Run on server

````pm2 start extractTwitter.js```
