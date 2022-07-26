const validator = require('validator');
const yargs = require('yargs');

const Notes = require('./notes.js');

// get the terminal commands with yargs...

// Create: add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'a note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            descibe: 'a note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Notes.addNote(argv.title, argv.body);
    }
});

// Read: read, list
yargs.command({
    command: 'read',
    describe: 'read selected note',
    builder: {
        title: {
            descibe: 'provide a title of note to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Notes.readNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        Notes.listNotes();
    }
})

// Update: edit
yargs.command({
    command: 'edit',
    describe: 'edit selected note',
    builder: {
        currentTitle: {
            describe: 'the current title of the note you want to change',
            demandOption: true,
            type: 'string'
        },
        newTitle: {
            describe: 'the new title of the note',
            demandOption: true,
            type: 'string'
        },
        newBody: {
            describe: 'the new body of the note',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        Notes.editNote(argv.currentTitle, argv.newTitle, argv.newBody)
    }
});

// Delete: remove
yargs.command({
    command: 'remove',
    describe: 'remove selected note',
    builder: {
        title: {
            descibe: 'provide a title of a note that you want to delete.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Notes.removeNote(argv.title);
    }
})


//  ...and manage them
// if(command === 'add') console.log('Adding note!');
// if(command === 'remove') console.log('Removing note!');

yargs.parse();