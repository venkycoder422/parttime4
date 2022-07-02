import { legacy_createStore as createStore } from "redux";



const reducer = (store,action) =>{
    switch(action.type){
        case "add_data":
            return {
                ...store,
                users:[...store.users,action.payload]
            }
            default:
                return store;
    }
}
export const store = createStore(reducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
    )