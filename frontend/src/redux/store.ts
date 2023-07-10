import {configureStore} from "@reduxjs/toolkit"
import { useDispatch,useSelector,TypedUseSelectorHook } from "react-redux";
import { eventReduce } from "./reducer"

const store = configureStore({
    reducer:{
        event:eventReduce
    }
});
export default store;
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const  useAppDispatch:()=>AppDispatch = useDispatch; 
export const  useAppSelector:TypedUseSelectorHook<RootState> = useSelector