const fs = require('fs');

const getNotes = () => 'Success!';

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((newNote) => {
        return notes.title == newNote.title
    })

    if(duplicateNotes) {
        notes.push({ title, body })

        saveNotes(notes)

        console.log('new note added');
    } else {
        console.log('note title already exists');
    }
};

const loadNotes = () => {
  try {
        const dataBuffer = fs.readFileSync('db.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);   
    } catch (err) {
        return [];
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
    
        console.log(`note titled ${noteTitle} has been removed`);
    } catch (err) {
        console.log(`error! ${err}`);
    }
}

const editNote = (currentTitle, newTitle, newBody) => {
    try {
        const notes = loadNotes().filter(noteToCheck => {
            if (noteToCheck.title == currentTitle) {
                
                noteToCheck.title = newTitle;
                noteToCheck.body = newBody;
    
                console.log(`the body and / or Title of note previously titled ${currentTitle} has been changed`);
            };
    
            return true;
        });
    
        saveNotes(notes);
    } catch (err) {
        console.log(`error! ${err}`);
    }
}

module.exports = { getNotes, addNote, removeNote, editNote };