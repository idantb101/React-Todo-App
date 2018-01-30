import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './Main';
import store from '../redux/store';

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </Provider>
);

export default App;
