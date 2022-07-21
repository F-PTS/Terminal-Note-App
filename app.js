const validator = require('validator');
const chalk = require('chalk');

const getNotes = require('./notes.js');

// get the input value from terminal...
const command = process.argv[2];

// ...and manage them
if(command === 'add') console.log('Adding note!');
if(command === 'remove') console.log('Removing note!');