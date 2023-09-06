import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {Model, createServer} from 'miragejs'

createServer({

  models: {
    projects: Model,
  },

  routes(){
    this.namespace = 'api';
    

    this.get('/projects', () => {
      return this.schema.all('projects')
     
    })

    this.post('projects', (schema, request) => {
      const data = JSON.parse(request.requestBody) 

      return schema.create('projects', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

