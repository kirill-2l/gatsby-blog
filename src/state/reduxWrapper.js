import React from "react"
import { Provider } from "react-redux"
import { createStore as reduxCreateStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import reducers from "./reducers"

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(logger, thunk)
)

const createStore = () => reduxCreateStore(reducers, enhancer)

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
