import {useSelector, useDispatch} from "react-redux"
import { setDecrementCount, setIncrementCount, setResetCount } from "../redux/slice"
export const ReduxCounter:React.FC = ():JSX.Element => {
    const {count} = useSelector(({Reducer}) => Reducer) 
    const dispatch = useDispatch()

    return(
        <div>
            <button onClick={() => dispatch(setIncrementCount(1))}>Inc</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(setDecrementCount(1))}>Dec</button>
            <button onClick={() => dispatch(setResetCount())}>Reset</button>
        </div>
    )
}