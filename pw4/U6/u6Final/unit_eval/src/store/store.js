import { legacy_createStore as createStore } from "redux";

import {reducer} from "./reducer";

export const store=createStore(reducer,{
    data:[]
})

store.subscribe(()=>{
    console.log(store.getState)
})