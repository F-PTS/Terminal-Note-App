const fs = require('fs');

const getNotes = () => 'Success!';

const addNote = (title, body) => {
    const notes = loadNotes();

    notes.push({ title, body })

    saveNotes(notes)
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

module.exports = { getNotes, addNote };