import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import SignUp from './pages/SignUp';
import AdditionalInfo from './pages/AdditionalInfo';
import Confirmation from './pages/Confirmation';
import SuccessMessage from './pages/SuccessMessage';
import ErrorMessage from './pages/ErrorMessage';
import Page404 from './pages/Page404';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<Provider store={store}><App /></Provider>);
  root.unmount(div);
});

it('SignUp renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<Provider store={store}><SignUp /></Provider>);
  root.unmount(div);
});

it('AdditionalInfo renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<Provider store={store}><AdditionalInfo /></Provider>);
  root.unmount(div);
});

it('Confirmation renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<Provider store={store}><Confirmation /></Provider>);
  root.unmount(div);
});

it('SuccessMessage renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<Provider store={store}><SuccessMessage /></Provider>);
  root.unmount(div);
});

it('ErrorMessage renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<Provider store={store}><ErrorMessage /></Provider>);
  root.unmount(div);
});

it('Pagge404 renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(<Provider store={store}><Page404 /></Provider>);
  root.unmount(div);
});
