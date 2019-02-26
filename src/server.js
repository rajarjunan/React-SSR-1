import express from 'express';
import React from 'react'; 
import { Provider } from 'react-redux';

import { renderToString } from 'react-dom/server';
import App from './Components/app';

import template from './template';
import configureStore from './store/store';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {

  const appString = renderToString(<Provider store={configureStore()}><App /></Provider>);
  // const tt = configureStore();
  // const initialState = tt.getState();
  const initialState = {};
  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: initialState
  }));
});
server.get('/api', (req, res ) => {
  res.json({ message: 'data successfully got it' });

})

server.listen(8000);
console.log('listening');
