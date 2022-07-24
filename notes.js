const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Success!';

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((newNote) => {
        return notes.title == newNote.title
    })

    if(duplicateNotes) {
        notes.push({ title, body })

        saveNotes(notes)

        console.log(chalk.green('new note added'));
    } else {
        console.log(chalk.yellow('note title already exists'));
    }
};

const loadNotes = () => {
  try {
        const dataBuffer = fs.readFileSync('db.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);   
    } catch (err) {
        console.log(chalk.red(`error! ${err}`));
    }
};

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('db.json', dataJSON);
}

const removeNote = noteTitle => {
    try {
        const notes = loadNotes().filter(noteToCheck => {
            return noteToCheck.title != noteTitle;
        });
    
        saveNotes(notes);
    
        console.log(chalk.green(`note titled ${noteTitle} has been removed`));
    } catch (err) {
        console.log(chalk.red(`error! ${err}`));
    }
}

const readNote = noteTitle => {
    try {
        loadNotes().map(noteToCheck => {
            if (noteToCheck.title == noteTitle) {
    
                console.log(chalk.blue(`"${noteTitle}"\n\n${noteToCheck.body}\n\n`));
            };
        });
    } catch (err) {
        console.log(chalk.red(`error! ${err}`));
    }
}

const editNote = (currentTitle, newTitle, newBody) => {
    try {
        const notes = loadNotes().filter(noteToCheck => {
            if (noteToCheck.title == currentTitle) {

                noteToCheck.title = newTitle;
                noteToCheck.body = newBody;
    
                console.log(chalk.green(`the body and / or Title of note previously titled ${currentTitle} has been changed`));
            };
    
            return true;
        });
    
        saveNotes(notes);
    } catch (err) {
        console.log(chalk.red(`error! ${err}`));
    }
}

const listNotes = () => {
    console.log(chalk.green('your notes: '));
    console.log(loadNotes());
}

module.exports = { getNotes, addNote, removeNote, editNote, listNotes, readNote };