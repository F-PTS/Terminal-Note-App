const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes.js');

// get the terminal commands with yargs...

// Create: add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler() {
        console.log('Adding new note!');
    }
});

// Read: read
yargs.command({
    command: 'read',
    describe: 'read selected note',
    handler() {
        console.log('the note:   {{ note here lol }}');
    }
});

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        console.log('your notes:  {{ notes here :P }} ')
    }
})

// Update: edit
yargs.command({
    command: 'edit',
    describe: 'edit selected note',
    handler() {
        console.log('well I gotta think how to do it the right way');
    }
});

// Delete: remove
yargs.command({
    command: 'remove',
    describe: 'remove selected note',
    handler() {
        console.log('remove selected note')
    }
})


//  ...and manage them
// if(command === 'add') console.log('Adding note!');
// if(command === 'remove') console.log('Removing note!');

console.log(yargs.argv)