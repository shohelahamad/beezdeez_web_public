import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import Root from './components/Root/Root';
import authReducer from './store/reducers/auth';
import profileReducer from './store/reducers/profile';
import scheduleReducer from './store/reducers/schedule';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    authinfo: authReducer,
    profile: profileReducer,
    schedules: scheduleReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
