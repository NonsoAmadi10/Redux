export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const SHOW_ALL = "SHOW_ALL";

export const addNote = (title, content)=> {
	return {type: ADD_NOTE , title, content};
};

export const delNote = (id) => {
	return { type: REMOVE_NOTE, id}
}

export const showAll =()=> {
	return {type: SHOW_ALL}
}