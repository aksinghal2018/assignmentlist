import React, { Component } from 'react'

export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             status:0
        }
    }
    componentDidMount(){
        if(localStorage.getItem('myCart')!=undefined){
            this.setState({status:1});
            var node=document.getElementById("data");
            node.innerHTML="a"
        }
    
    }
    componentDidUpdate(){
        if(this.state.status==0){
            var node=document.getElementById("emptycart");
            node.style.display="none"
            var node1=document.getElementById("fullcart");
            node1.style.display="block"
        }
        else{
            var node=document.getElementById("emptycart");
            node.style.display="block"
            var node1=document.getElementById("fullcart");
            node1.style.display="none"
        }

    }
    render() {
        
        return (

            <>
            <h1>Your Cart</h1>
            <div className="container mt-4" style={{border:"1px solid black" ,width:"500px", height:"500px"}}>
               <div id="emptycart"><h1>Cart is empty</h1></div>
               <div id="fullcart"><h1>your cart</h1>
               <div id="data"></div>
               </div>
            </div>
            </>
        )
    }
}

export default Cart
