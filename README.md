# AngularWithTypeScript

## Installing

You must have node.js installed. You can get node.js on [nodejs.org](https://nodejs.org)

If you are running on windows, use the `Node.js command prompt`

Below are some packages we need to configure in order to run the application

Grunt
```
npm install grunt-cli -g
```
http-server
```
npm install http-server -g
```
Typescript
```
npm install typescript -g
```
Typescript definition manager.
```
npm install tsd -g
```
You can check the typescript definitions available on [definitelytyped.org](definitelytyped.org)
```
tds install angular --resolve --save
```

## Editor

I like to use [VSCode](https://code.visualstudio.com/) for typescript and node.js.

## Running

In the first time you need to run the command below:

```
npm install
grunt uglify
grunt cssmin
```

Now you have the files compiled for the first time, you only need to do this:

```
grunt
``` 

It will open the *index.html* page on the default browser.

