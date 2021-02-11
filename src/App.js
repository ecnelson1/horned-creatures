import React from 'react';
import PageHeader from './header.js'
import ImageList from './imageList.js'
import Dropdown from './dropDown.js'
import images, {numberOfHorns, keywordSearches} from './data.js'
import './App.css';



export default class App extends React.Component {
  state = {
    keyword: '',
    horns: 0
  }
  handleKeywordChange = (e) => {
    e.preventDefault();
    this.setState({keyword: e.target.value})}
    handleHornsChange = (e) => {
      e.preventDefault();
      this.setState({horns: Number(e.target.value)})}
    render(){
      const filteredImages = images.filter((image) => {
        if (!this.state.keyword && !this.state.horns) return true;
        if (this.state.keyword && !this.state.horns){
          if (image.keyword === this.state.keyword) return true;
        }
        if (!this.state.keyword && this.state.horns){
          if (image.horns === this.state.horns) return true;
        } 
        if (this.state.keyword && this.state.horns){
          if(image.keyword === this.state.keyword && image.horns === this.state.horns) return true;
        }
      return false;
    });
      return (
      <div className="page-body">
          <PageHeader /> 
          <section className="filters">
         <Dropdown 
         currrentValue={this.state.keyword}
         handleChange={this.handleKeywordChange}
         options={keywordSearches}
         />
         <Dropdown
         currentValue={this.state.horns}
         handleChange={this.handleHornsChange}
         options={numberOfHorns}
         />
         </section>
          <ImageList filteredImages={filteredImages} className = "ImageList"/>
         
     
        </div>
      )}}
       
