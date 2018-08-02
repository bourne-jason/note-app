console.log('Inside notes.js');
const fs = require('fs');

var fetchNotes = () => {
    try{
        var allNotes = fs.readFileSync('notes-data.json');
        return JSON.parse(allNotes);
    }
    catch (e) {
        return [];
    }
};

var saveNote = (allNotes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(allNotes));
};

var addNote = (title, body) => {
    var notes = {
        title, body
    };
    console.log('To add :: ', notes);

    var allNotes = fetchNotes();
    console.log(typeof allNotes);

    var filteredNotes = allNotes.filter((a) => a.title === title);

    if(filteredNotes.length === 0){
        allNotes.push(notes);
        saveNote(allNotes);
        return notes;
    }
};

var readNote = (title) => {
    var allNotes = fetchNotes();

    var filteredNotes = allNotes.filter((a) => a.title === title);

    if(filteredNotes.length === 0){
        console.log('No notes found with the given title....');
        return;
    }
        
    debugger;

    for(i = 0; i < filteredNotes.length; i++){
        console.log(`Note :: ${i + 1}`);
        console.log(`Title :: ${filteredNotes[i].title}`);
        console.log(`Body :: ${filteredNotes[i].body}`);
    }
};

var getAll = () => {
    var allNotes = fetchNotes();
    
    if(allNotes.length > 0){    
        for(i = 0; i < allNotes.length; i++){
            console.log(`Note :: ${i + 1}`);
            console.log(`Title :: ${allNotes[i].title}`);
            console.log(`Body :: ${allNotes[i].body}`);
        }
    }
    else{
        console.log('No Notes to read...');
    }
};

var removeNote = (title) => {
    var allNotes = fetchNotes();

    var filteredNotes = allNotes.filter((a) => a.title !== title);

    if(filteredNotes.length === allNotes.length){
        console.log(`${title} note no present...`);
        return;
    }

    console.log(filteredNotes);
    saveNote(filteredNotes);
}

module.exports = {
    addNote,
    readNote,
    getAll,
    removeNote
};