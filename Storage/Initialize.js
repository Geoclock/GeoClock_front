import React from 'react';
import combinedReducers from "./Reducers";
import {compose, createStore} from "redux";

const storage = createStore(combinedReducers,
compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
));

export default storage
