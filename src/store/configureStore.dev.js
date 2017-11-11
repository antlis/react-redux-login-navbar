import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from '../_reducers'
import DevTools from '../containers/DevTools'
import {loadState, saveState} from "./localeStorage";


const configureStore = () => {
    const store = createStore(
        rootReducer,
        loadState(),
        compose(
            applyMiddleware(thunk, createLogger()),
            DevTools.instrument()
        )
    );

    store.subscribe(() => {
        saveState({
            translate: store.getState().translate
        });
    });

    return store
}

export default configureStore
