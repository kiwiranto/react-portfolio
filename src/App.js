import React, { Component } from 'react';
import './App.scss';
import Header from './layouts/header/header';
import Router from './router';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <main>
          <Router />
        </main>
      </div>
    )
  }
}
