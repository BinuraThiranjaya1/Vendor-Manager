import React, { Component } from 'react'
import Reg from './register/index';
import ViewProduct from './viewVendors/index';
import Dashboard from '../../component/dashboard/index';
import './style.css';

export default class index extends Component {
  render() {
    return (
      <div>
        <Dashboard/>
        <h1 className="signIn-Heading">Manage Users</h1>
        <Reg/>
        <h1 className="signIn-subTopic m-5"> All Vendors</h1>

        <ViewProduct/>
      </div>
    )
  }
}
