import {createSlice} from "@reduxjs/toolkit"

import { createStore,combineReducers  } from "@reduxjs/toolkit"

const data={loginhandlerbutton:false,additembuttonHandler:false,time:"",editPopup:false,editNote:{},locallogin:false}

const StoreReducer=createSlice({
    name:"store",
    initialState:data,
    reducers:{

        showadditem(state,action){
      
            state.additembuttonHandler = !state.additembuttonHandler
          
        },
        showLoginpopup(state,action){
       
     
            state.loginhandlerbutton = !state.loginhandlerbutton
           
        },
        editNoteButton(state,action){
            state.editPopup = !state.editPopup
            state.editNote=action.payload
            console.log(action.payload)
        },
        userlogin(state){
            state.locallogin = !state.locallogin
            console.log(  state.locallogin)
        }
    }
})

export const storeActions=StoreReducer.actions

const rootReducer = combineReducers({
    store: StoreReducer.reducer,
  });


  const Store = createStore(rootReducer);
 export default Store