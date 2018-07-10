import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import reducers from '../redux/reducers'
import rootSaga from '../redux/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger)
)
// then run the saga
sagaMiddleware.run(rootSaga)
