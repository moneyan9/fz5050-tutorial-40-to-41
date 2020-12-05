import { useState, ChangeEvent, Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { NotesStateAction } from '../duck/NewNoteInput/notesreducer';

const NewNoteInput = () => {

    //テキストエリアの値管理用
    const [note, setNote] = useState<string>("");

    //note一覧をグローバルstateとして管理
    const dispatch = useDispatch<Dispatch<NotesStateAction>>();

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }


    const addNote = (note: string) => {
        dispatch({ type: "notes/add", payload: note });
    }


    const handleAddNote = () => {
        addNote(note); //グローバルstateにnoteを追加
        setNote(""); //テキストエリアリセット
    }


    return (
        <div>
            <input onChange={updateNote} value={note} type="text" />
            <button onClick={handleAddNote}> add note</button>
            <div>debug:{note}</div>
        </div>
    );
}

export default NewNoteInput