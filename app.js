console.log('Starting app');

const   yargs = require('yargs');
const   notes = require('./notes.js');
const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 'tit'
};
const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'bo'
}; 

var command = yargs.command('add', 'Adds a note with unique title', {
    title: titleOptions,
    body: bodyOptions
}).command('read', 'Reads a particular Note', {
    title : titleOptions
}).command('remove', 'Removes a particular Note', {
    title : titleOptions
}).command('getAll', 'Fetches all Notes')
.help().argv;
var cl = command._[0];
console.log('Command ::', command._);
console.log('Command :: ', cl);

if(cl === 'read'){
    notes.readNote(command.title);
}
else if(cl === 'add'){
    console.log('Will be adding note....');
    if(notes.addNote(command.title, command.body)){
        console.log('Note added...')
    }
    else{
        console.log('Note with same title already present...');
    }
}
else if(cl === 'getAll'){
    console.log('Getting all Notes....');
    notes.getAll();
}
else if(cl ==='remove'){
    if(command.title){
        console.log('Removing Note :: ', command.title);
        notes.removeNote(command.title);
    }
    else
        console.log('Please enter a title to remove....');
}