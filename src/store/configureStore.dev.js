import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../_reducers'
import DevTools from '../containers/DevTools'


const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
      compose(
          applyMiddleware(thunk, createLogger()),
          DevTools.instrument()
      )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../_reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
