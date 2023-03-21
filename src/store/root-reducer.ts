import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { darkModeReducer } from './slices/dark-mode/darkMode';
import { filesReducer } from "./slices/files/files";

const persitConfig = {
    key: 'root',
    storage
}

const combinedReducers = combineReducers({
    darkMode : darkModeReducer,
    files: filesReducer
});

const persistedReducer = persistReducer(persitConfig, combinedReducers)


export default persistedReducer;