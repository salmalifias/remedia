import React, { Component,Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from  "./pages/Dashboard";
import Login from "./pages/Login";
import PerminVideo from "./pages/PerminVideo";
import PerminWebsite from "./pages/PerminWebsite";
import PerminPublikasi from "./pages/PerminPublikasi";
import PerminDesain1 from "./pages/PerminDesain1";
import PerminDesain2 from "./pages/PerminDesain2";
import ViewPermintaanW from "./pages/ViewPermintaanW";
import ViewPermintaanV from "./pages/ViewPermintaanV";
import ViewPermintaanP from "./pages/ViewPermintaanP";
import ViewPermintaanD from "./pages/ViewPermintaanD";
import ViewPermintaanW2 from "./pages/ViewPermintaanW2";
import ViewPermintaanV2 from "./pages/ViewPermintaanV2";
import ViewPermintaanP2 from "./pages/ViewPermintaanP2";
import ViewPermintaanD2 from "./pages/ViewPermintaanD2";

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<div/>}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"/>
          </Route>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route path="/login" component={ Login } />
          <Route path="/permintaan-video" component={ PerminVideo } />
          <Route path="/permintaan-website" component={ PerminWebsite } />
          <Route path="/permintaan-publikasi" component={ PerminPublikasi } />
          <Route path="/permintaan-desain-1" component={ PerminDesain1 } />
          <Route path="/permintaan-desain-2" component={ PerminDesain2 } />
          <Route path="/view-permintaan-web" component={ ViewPermintaanW } />
          <Route path="/view-permintaan-video" component={ ViewPermintaanV } />
          <Route path="/view-permintaan-publikasi" component={ ViewPermintaanP } />
          <Route path="/view-permintaan-desain" component={ ViewPermintaanD } />
          <Route path="/view-permintaan-web2" component={ ViewPermintaanW2 } />
          <Route path="/view-permintaan-video2" component={ ViewPermintaanV2 } />
          <Route path="/view-permintaan-publikasi2" component={ ViewPermintaanP2 } />
          <Route path="/view-permintaan-desain2" component={ ViewPermintaanD2 } />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;