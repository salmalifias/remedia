import React, { Component,Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from  "./pagesAdmin/Dashboard";
import Login from "./pagesAdmin/Login";
import Profile from "./pagesAdmin/Profile";
import PerminVideo from "./pagesAdmin/PerminVideo";
import PerminWebsite from "./pagesAdmin/PerminWebsite";
import PerminPublikasi from "./pagesAdmin/PerminPublikasi";
import PerminDesain1 from "./pagesAdmin/PerminDesain1";
import PerminDesain2 from "./pagesAdmin/PerminDesain2";
import ViewPermintaan from "./pagesAdmin/ViewPermintaan";

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<div/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route path="/login" component={ Login } />
          <Route path="/profile" component={ Profile } />
          <Route path="/permintaan-video" component={ PerminVideo } />
          <Route path="/permintaan-website" component={ PerminWebsite } />
          <Route path="/permintaan-publikasi" component={ PerminPublikasi } />
          <Route path="/permintaan-desain-1" component={ PerminDesain1 } />
          <Route path="/permintaan-desain-2" component={ PerminDesain2 } />
          <Route path="/view-permintaan" component={ ViewPermintaan} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;