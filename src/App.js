import React, { Component } from 'react'
import BAV_EventForm1 from './components/BAV_EventForm1';
import BAV_EventForm2 from './components/BAV_EventForm2';
import BAV_EventForm3 from './components/BAV_EventForm3';
import BAV_EventForm4 from './components/BAV_EventForm4';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo </h1>
        <BAV_EventForm1 />
        <BAV_EventForm2 />
        <BAV_EventForm3 />
        <BAV_EventForm4 name="bui anh vuong" />
      </div>
    );
  }
}
