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
import Digitalt from './containers/ServicePages/Digitalt';
import Salg from './containers/ServicePages/Salg';
import Okonomi from './containers/ServicePages/Okonomi';
import Lager from './containers/ServicePages/Lager';
import OmOs from './containers/OmOs/OmOs';

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
</style>

class App extends Component {
  state={
    showBoxShadow: false,
    showModal: false,
  }
  
  closeModal = () => {
    this.setState( { showModal: false } );
  }

  showBoxShadowOnScroll = () => {
    this.setState( { showBoxShadow: true } );
    }

  componentDidMount(){
    if (!sessionStorage.getItem('sessionHideModal')) {
      if (window.location.pathname !== '/') {
        sessionStorage.setItem('sessionHideModal', true);
      }
    }
    if (!sessionStorage.getItem('sessionHideModal')) {
      setTimeout(() => {
        this.setState({showModal: true});
      }, 500);
      sessionStorage.setItem('sessionHideModal', true);
    }
    if (this.state.showModal) {
      document.body.style.overflowY = "hidden";
      document.querySelector('.App').style.paddingRight = "15px";
    }else{
      document.body.style.overflowY = "auto";
      document.querySelector('.App').style.paddingRight = "0px";
    }
      window.addEventListener('scroll', this.showBoxShadowOnScroll, {once: true});
  }

  //just in case
  componentWillUnmount(){
    window.removeEventListener('scroll', this.showBoxShadowOnScroll);
}
  
  render() {
    return (
      <div className="App">
        <Layout showBox= {this.state.showBoxShadow}>
          <Switch>
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/virksomheder/digitalt" component={Digitalt}/>
            <Route path="/virksomheder/okonomi" component={Okonomi}/>
            <Route path="/virksomheder/lager" component={Lager}/>
            <Route path="/virksomheder/salg" component={Salg}/>
            <Route path="/virksomheder" component={Virksomheder} />
            <Route path="/vikar/hop-ombord" component={HopOmbord} />
            <Route path="/vikar" component={Vikar} />
            <Route path="/uddannelser" component={Uddanelser}/>
            <Route path="/om-os" component={OmOs}/>
            <Route exact path="/">
              <Vikar />
              <Modal show = {this.state.showModal} modalClosed={this.closeModal} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
