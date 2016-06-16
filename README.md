# commular-test

[![NPM Version](http://img.shields.io/npm/v/commular-test.svg?style=flat)](https://npmjs.org/package/commular-test)
[![Build Status](http://img.shields.io/travis/tcorral/commular-test.svg?style=flat)](https://travis-ci.org/tcorral/commular-test)

A commular module to show how [commular](https://github.com/tcorral/commular) can be developed and tested easily.

## Getting Started
This plugin requires Commular `~0.3.2`

If you haven't used [Commular](https://github.com/tcorral/commular) before, be sure to check out the 
[documentation](https://github.com/tcorral/commular/blob/master/README.md)

```shell
npm install commular-test --save-dev
```

## The "commular-test" task

### Overview
This is a dummy Commular module to be used as a template for the rest of real modules.

### API
- A commular module requires to export a ```command``` function that receives as argument the ```program/commander``` object.
 
 Example:
 ```js
 exports.command = function(program) {
   program
     .command('setup [env]')
     .description('run setup commands for all envs')
     .option("-s, --setup_mode [mode]", "Which setup mode to use")
     .action(function(env, options){
       var mode = options.setup_mode || "normal";
       env = env || 'all';
       console.log('setup for %s env(s) with %s mode', env, mode);
     });
 };

 ```
