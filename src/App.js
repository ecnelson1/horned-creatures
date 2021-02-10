import React from 'react';
import PageHeader from './header.js'
import ImageList from './imageList.js'
import images from './data.js'
import './App.css';



export default class App extends React.Component {
  state = {
    keyword: '',
  }
  handleFilterChange = (e) => {
    e.preventDefault();
    this.setState({keyword: e.target.value})}
    render(){
      const filteredImages = images.filter((image) => {
      if (image.keyword === this.state.keyword) return true;
      if (!this.state.keyword) return true;
      return false;
    });
      return (
      <div className="page-body">
          <PageHeader  />
          <form className = "filters">
                <h1 className = "fiterBar">
                  <p>Keyword:</p></h1>
                    <select
                    value = {this.state.keyword}
                     onChange = {this.handleFilterChange}>
                        <option value = "narwhal">Narwhal</option>
                        <option value = "rhino">Rhino</option>
                        <option value = "unicorn">Unicorn</option>
                        <option value = "unilego">Unilego</option>
                        <option value = "triceratops">Triceratops</option>
                        <option value = "markhor">Markhor</option>
                        <option value = "mouflon">Mouflon</option>
                        <option value = "chameleon">Chameleon</option>
                        <option value = "lizard">Lizard</option>
                        <option value = "dragon">Dragon</option>
                    </select>
                    
                </form>
          <ImageList filteredImages={filteredImages} className = "ImageList"/>
         
     
        </div>
      )}}
       
