import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Dashboard = lazy(() => import('./pagesAdmin/Dashboard'));
const Login = lazy(() => import('./pagesAdmin/Login'));
const Profile = lazy(() => import('./pagesAdmin/Profile'));
const PerminVideo = lazy(() => import('./pagesAdmin/PerminVideo'));
const PerminWebsite = lazy(() => import('./pagesAdmin/PerminWebsite'));
const PerminPublikasi = lazy(() => import('./pagesAdmin/PerminPublikasi'));
const PerminDesain1 = lazy(() => import('./pagesAdmin/PerminDesain1'));
const PerminDesain2 = lazy(() => import('./pagesAdmin/PerminDesain2'));

const DashboardG = lazy(() => import('./pagesGeneral/Dashboard'));

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

          <Route path="/dashboard-general" component={ DashboardG } />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;