CONSTANT.JS
===========
Constants for your project.

USAGE
=====
var defined = require('constant').defined;
var define = require('constant').define;
var constant = require('constant').constant;
var PATH_ROOT = define('PATH_ROOT', __dirname); // PATH_ROOT = /usr/home/root
define('PATH_ROOT', './'); // Error: PATH_ROOT already defined.
if (defined('PATH_ROOT')) {
	// true
}
console.log('PATH_ROOT = ', constant('PATH_ROOT'));