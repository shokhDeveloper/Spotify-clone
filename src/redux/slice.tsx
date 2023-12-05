import {createSlice} from "@reduxjs/toolkit"
interface initialStateinter {
    count: number
}
const initialState :initialStateinter =  {
    count: 0
}
export const slice = createSlice({
    name: "redux",
    initialState,
    reducers:{
        setIncrementCount(state, action){
            state.count += action.payload           
        },
        setDecrementCount(state, action){
            state.count -= action.payload
        },
        setResetCount(state){
            state.count = 0
        }
    }
})
export const {setIncrementCount, setDecrementCount, setResetCount} = slice.actions
export const Reducer = slice.reducer