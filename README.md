# AngularWithTypeScript

## Installing

You must have node.js installed. You can get node.js on [nodejs.org](https://nodejs.org)

If you are running on windows, use the `Node.js command prompt`

Below are some packages we need to configure in order to run the application

Grunt
```ShellSession
npm install grunt-cli -g
```
http-server
```ShellSession
npm install http-server -g
```
Typescript
```ShellSession
npm install typescript -g
```
Typescript definition manager.
```ShellSession
npm install tsd -g
```
You can check the typescript definitions available on [definitelytyped.org](definitelytyped.org)
```ShellSession
tds install angular --resolve --save
```

## Editor

I like to use [VSCode](https://code.visualstudio.com/) for typescript and node.js.

## Running

In the first time you need to run the command below:

```ShellSession
npm install
grunt uglify
grunt cssmin
```

Now you have the files compiled for the first time, you only need to do this:

```ShellSession
grunt
``` 

It will open the *index.html* page on the default browser.

