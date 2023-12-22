import { legacy_createStore as createStore } from "redux"
import reducer from "./components/store/reducer";
import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

const store = createStore(reducer);
// const store = createStore(rootReducer, applyMiddleware(thunk));
export default store
//dispatcher byb2a ms2ul en state y7slha change wy components ely muhtma bl data y7slha render wy ht3rd value gdeda