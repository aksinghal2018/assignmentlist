import './App.css';
import ApplicationForm from './FormComponent/ApplicationForm';
import List from './ListCompoent/List';
import Product from './ProductComponent/Product';

import React, { Component } from 'react'

export class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.product=this.product.bind(this)
    this.list=this.list.bind(this)
    this.application=this.application.bind(this)
  }
  product=()=>{
    var node2=document.getElementById("listdiv");
    node2.style.display="none"
    var node3=document.getElementById("applicationdiv");
    node3.style.display="none"
    var node4=document.getElementById("productdiv");
    node4.style.display="block"
  }
  list=()=>{
    var node2=document.getElementById("listdiv");
    node2.style.display="block"
    var node3=document.getElementById("applicationdiv");
    node3.style.display="none"
    var node4=document.getElementById("productdiv");
    node4.style.display="none"
  }
  application=()=>{
    var node2=document.getElementById("listdiv");
    node2.style.display="none"
    var node3=document.getElementById("applicationdiv");
    node3.style.display="block"
    var node4=document.getElementById("productdiv");
    node4.style.display="none"
  }
  componentDidMount(){
  var node=document.getElementById("products");
  node.style.display="block"
  var node1=document.getElementById("cart");
  node1.style.display="none"
  var node2=document.getElementById("listdiv");
  var node3=document.getElementById("applicationdiv");

  node2.style.display="none"
   node3.style.display="none"
    var node4=document.getElementById("productdiv");
     node4.style.display="block"
    }
  render() {
    return (
      <div>
        <div>
          <button type="button" className="btn button m-4" id="productbtn" onClick={this.product}>
            Product Assignment
          </button>
          <button type="button" className="btn button m-4" id="assignmentbtn" onClick={this.list}>
            list Assignment
          </button>
          <button type="button" className="btn button m-4" id="applicationbtn" onClick={this.application}>
            application Assignment
          </button>
        </div>
    <div className="App">
      <div id="listdiv">
      <List />
      </div>
      <div id="applicationdiv">
      <ApplicationForm />
      </div>
      <div id="productdiv">
      <Product />
      </div>
      
    </div>
        
      </div>
    )
  }
}


export default App;
