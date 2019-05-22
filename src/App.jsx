import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

const createAsyncComponent = (loader, options) => {
  return Loadable({
    ...options,
    loader,
  });
};
const opt = {
  loading: Loader,
  delay: 200,
  timedOut: 10000,
};

const HomePage = createAsyncComponent(
  () => import('./pages/HomePage' /* webpackChunkName: "AboutPage" */),
  opt,
);
const AboutPage = createAsyncComponent(
  () => import('./pages/AboutPage' /* webpackChunkName: "AboutPage" */),
  opt,
);
const PetsPage = createAsyncComponent(
  () => import('./pages/PetsPage' /* webpackChunkName: "AboutPage" */),
  opt,
);
const PetPage = createAsyncComponent(
  () => import('./pages/PetPage' /* webpackChunkName: "AboutPage" */),
  opt,
);

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/pets/:id" component={PetPage} />
        <Route path="/pets" component={PetsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
export default App;
