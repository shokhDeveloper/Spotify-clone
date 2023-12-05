import {useReducer} from "react"
interface CounterProps {
    name: string
}
type CounterType = {
    count: number
}
type CounterUpdate = {
    type: "inc" | "dec",
    payload: number    
}
type ResetAction = {
    type: "reset"
}
type CounterAction = CounterUpdate | ResetAction
export const Counter:React.FC<CounterProps> = ({name}) => {
    const initialState = {count: 0}
    const reducer = (state:CounterType, action:CounterAction): CounterType => {
        switch(action.type){
            case "inc":{
                return {count: state.count + action.payload}
            }break;
            case "dec":{
                if(state.count > 1){
                    return {count:state.count - action.payload}
                }else{
                    return state
                }
            }break;
            case "reset":{
                return {count: 0}
            }
            default: return state
        }
    }
    const [state, dispatch ] = useReducer(reducer, initialState)

    return(
        <>
            <button onClick={() => dispatch({type: "dec", payload: 1})}>Decrement</button>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: "inc", payload: 1})}>Increment</button>
            <button onClick={() => dispatch({type: "reset"})}></button>
        </>
    )
}