import React from 'react';
import PageHeader from './header.js'
import ImageList from './imageList.js'
import images from './data.js'
import './App.css';
// state = {
//       keyword: '',
//    }
export default class App extends React.Component {
  //  handleFilterChange = (e) => {this.setState({keyword: e.target.value})}
      render(){ return (
        <div className="page-body">
          <PageHeader />
          <ImageList />
        </div>
      )}}
