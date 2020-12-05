import { useSelector } from "react-redux";
import NewNoteInput from "../components/NewNoteInput"
import { NotesState } from "../duck/NewNoteInput/notesreducer";
import { RootState } from "../store";

const Home2 = () => {

    const notes = useSelector<RootState, NotesState["notes"]>((state: RootState) => state.notesReducer.notes);

    return (
        <div>

            <NewNoteInput />
            <hr />
            <ul>
                {notes.map((note) => {
                    return (
                        <li key={note}> {note}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Home2