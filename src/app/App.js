import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';

class App extends Component {
  state = {}
  componentDidMount() {
    this.onRouteChanged();
  }

  render () {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar/> : '';
    return (
      <div className="">
        <div className="container-fluid page-body-wrapper">
          { navbarComponent }
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes/>
            </div>
          </div>
        </div>
       </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/login'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        this.setState({
          isFullPageLayout: false
        })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }
}

export default (withRouter(App));