//notesReducerが受けるaction
export interface NotesState {
    notes: string[];
};

const initialState = {
    notes: []
};

export type NotesStateAction = {
    type: "notes/add",
    payload: string
};


export const notesReducer = (state: NotesState = initialState, action: NotesStateAction) => {
    switch (action.type) {
        case "notes/add":
            return { ...state, notes: [...state.notes, action.payload] };

        default:
            return state;
    }
}