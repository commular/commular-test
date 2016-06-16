'use strict';

var commularTest = require('../scripts');
var program = require('commander');

exports.commularTest = {
  "Check that commands are added": function(test) {
    test.expect(2);
    test.equals(program.commands.length, 0, 'There are no commands.');
    commularTest.command(program);
    test.equals(program.commands.length, 1, 'There is one command available.');
    test.done();
  },
  "Check that the console returns the expected value passing environment but not mode": function (test) {
    var backLog = console.log;
    test.expect(3);
    console.log = function () {
      backLog.call(this, arguments);
      test.equals('setup for %s env(s) with %s mode', arguments[0]);
      test.equals('test', arguments[1]);
      test.equals('normal', 'normal');
      console.log = backLog;
      test.done();
    };
    commularTest.command(program);
    program.parse(['node', 'test', 'setup', 'test']);
  },
  "Check that the console returns the expected value passing environment and mode": function (test) {
    var backLog = console.log;
    test.expect(3);
    console.log = function () {
      backLog.call(this, arguments);
      test.equals('setup for %s env(s) with %s mode', arguments[0]);
      test.equals('test', arguments[1]);
      test.equals('mode3', arguments[2]);
      console.log = backLog;
      test.done();
    };
    commularTest.command(program);
    program.parse(['node', 'test', 'setup', 'test', '--setup_mode', 'mode3']);
  }
};
