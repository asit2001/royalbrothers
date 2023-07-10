import {PayloadAction, createSlice} from "@reduxjs/toolkit"


const eventSlice = createSlice({
    name:"event",
    initialState:{
      showSideBar:false,
      showCityModel:false,  
    },
    reducers:{
        setShowSideBar(state,action:PayloadAction<boolean>){
            state.showSideBar = action.payload
        },
        setShowCityModel(state,action:PayloadAction<boolean>){
            state.showCityModel = action.payload
        }
    }
})


export const eventReduce = eventSlice.reducer;
export const {setShowSideBar,setShowCityModel} = eventSlice.actions