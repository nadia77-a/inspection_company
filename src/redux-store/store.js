import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { mainReducer } from "./mainReducer";
import { mainSaga } from "./mainSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(mainReducer, applyMiddleware(...middleware));

sagaMiddleware.run(mainSaga);

export default store;
