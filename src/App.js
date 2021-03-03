import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import './App.css';
import NotFound from './containers/NotFound/NotFound';
import Modal from './components/UI/Modal/Modal';
import Kontakt from './containers/Kontakt/Kontakt';
import Virksomheder from './containers/Virksomheder/Virksomheder';
import Vikar from './containers/Vikar/Vikar';
import Uddanelser from './containers/Uddanelser/Uddanelser';
import HopOmbord from './containers/HopOmbord/HopOmbord';

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>

class App extends Component {
  state={
    showModal: false,
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({showModal: true});
    }, 500)
    if (this.state.showModal) {
      document.body.style.overflowY = "hidden";
      document.querySelector('.App').style.paddingRight = "15px";
    }else{
      document.body.style.overflowY = "auto";
      document.querySelector('.App').style.paddingRight = "0px";
    }
  }

  closeModal = () => {
    this.setState( { showModal: false } );
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/virksomheder" component={Virksomheder} />
            <Route path="/vikar" component={Vikar} />
            <Route path="/hop-ombord" component={HopOmbord} />
            <Route path="/uddanelser" component={Uddanelser}/>
            <Route exact path="/">
              <Modal show = {this.state.showModal} modalClosed={this.closeModal} />
              <Vikar />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
