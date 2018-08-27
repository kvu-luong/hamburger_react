import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      <div className="container">
       <Layout>
         <BurgerBuilder />
       </Layout>
      </div>
    );
  }
}

export default App;
