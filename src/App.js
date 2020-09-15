import React from 'react';
import SuperCentered from './components/super_centered';
import './App.css';
import DeconstructedPancake from "./components/deconstructed-pancake";
import SidebarSays from "./components/sidebar-says"

export default class App extends React.Component {

  render() {
    return(
      <div className="app-div-main">
        <br />
        <div className="app-div">
          <SuperCentered />
        </div>

        <br /> <br /> <br />

        <div className="deconstruct">
          <DeconstructedPancake />
        </div>

        <br /> <br /> <br />

        <div className="sidebar-says">
          <SidebarSays />
        </div>
      </div>
    )
  }
}

