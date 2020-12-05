import { useDispatch, useSelector } from "react-redux";

import { CountState } from "../duck/MyButton/countReducer";
import MyButton from "../components/MyButton";
import { countIncrement } from "../duck/MyButton/actions"; //action部分をインポート


const Home = () => {

    const counter = useSelector<CountState, CountState["counter"]>((state) => state.counter);
    const dispatch = useDispatch();

    const handleCountUpBtn = (value: number) => {
        //dispatch({type:"count/increment", payload:value});
        dispatch(countIncrement(value));
    }

    return (
        <div>
            counter:{counter}
            <div>
                <button onClick={() => handleCountUpBtn(1)}> [+] (home.tsx)  </button>
                <hr />
                <MyButton />
            </div>
        </div>
    );
}

export default Home