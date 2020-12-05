import { useDispatch, useSelector } from "react-redux";
import { countIncrement } from "../duck/MyButton/actions";
import { CountState } from "../duck/MyButton/countReducer";

const MyButton = () => {

    const mycounter = useSelector<CountState, CountState["counter"]>((state) => state.counter);
    const dispatch = useDispatch();


    const handleCountUpBtn = (value: number) => {
        //dispatch({type:"count/increment", payload:value});
        dispatch(countIncrement(value));
    }

    return (
        <div>
            <button onClick={() => handleCountUpBtn(1)}> [+] ＜MyButton /＞  </button>
               ※debug counter:{mycounter}
        </div>
    );
}

export default MyButton