import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    );
  }
}
export default App;
