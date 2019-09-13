import store from "./store/store";
import { addNote, delNote } from "./actions/action";




// ------ HTML references ------
let notesUList = document.getElementById("notes");
let addNoteForm = document.getElementById("add-note");



// ------ Redux ------
function deleteNote(index) {
  store.dispatch(delNote(index))
	
}

function renderNotes() {
	let notes = store.getState().notes;
	console.log(notes);
	notesUList.innerHTML ="";
	notes.map((note, index) => {
		let noteItem = `
      <li>
        <b>${ note.title }</b>
        <button data-id="${ index }">x</button>
        <br />
        <span>${ note.content }</span>
      </li>
    `;
		notesUList.innerHTML += noteItem;
	});
	setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let title = addNoteForm.title.value;
	let content = addNoteForm.content.value;

	store.dispatch(addNote(title, content));
  
});

function setDeleteNoteButtonsEventListeners() {
	let buttons = document.querySelectorAll("ul#notes li button");
  
	for(let button of buttons) {
		button.addEventListener("click", () => {
			deleteNote(button.dataset.id);
		});
	}
}

store.subscribe(() => {
  renderNotes();
});


// ------ Render the initial Notes ------
renderNotes();
