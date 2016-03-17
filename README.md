# AngularWithTypeScript

This project is based on the *Angular with Typescript* course from [pluralsight](http://pluralsight.com)

## Installing

You must have node.js installed. You can get node.js on [nodejs.org](https://nodejs.org)

If you are running on windows, use the `Node.js command prompt`

Below are some packages we need to configure in order to run the application

Grunt
```Shell
npm install grunt-cli -g
```
http-server
```Shell
npm install http-server -g
```
Typescript
```Shell
npm install typescript -g
```
Typescript definition manager.
```Shell
npm install tsd -g
```
You can check the typescript definitions available on [definitelytyped.org](definitelytyped.org)
```Shell
tsd install angular --resolve --save
tsd install angular-resource --save
tsd install angular-mocks --save
```

## Editor

I like to use [VSCode](https://code.visualstudio.com/) for typescript and node.js.

## Running

In the first time you need to run the command below:

```Shell
npm install
grunt uglify
grunt cssmin
```

Now you have the files compiled for the first time, you only need to do this:

```Shell
grunt
``` 

It will open the *index.html* page on the default browser.

