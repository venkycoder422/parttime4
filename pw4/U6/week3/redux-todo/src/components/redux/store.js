
import {legacy_createStore as createStore}
 from "redux";
import { addReducer } from "./reducer";

export const store = createStore(addReducer,{
    todos:[] 
})

store.subscribe(()=>{
    console.log(store.getState());
})


