import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2202642Reducer from '../features/SignIn2202642/redux/reducers'
import SignIn2202569Reducer from '../features/SignIn2202569/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2202642: SignIn2202642Reducer,
SignIn2202569: SignIn2202569Reducer,

});