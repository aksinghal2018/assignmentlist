import React, { Component } from 'react'
import JsonData from '../Data/product.json'
import Cart from './Cart';
export class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            itemcount:0
        }
        this.cartdata=this.cartdata.bind(this)
    }
    // console.log(products)
    cartdata=()=>{
        var node=document.getElementById("products");
        node.style.display="none"
        var node1=document.getElementById("cart");
        node1.style.display="block"
    }
    addcart=(data)=>{
        var id=data[0]
        var name=data[1]
        if(localStorage.getItem('myCart')!=undefined){
            var arr=JSON.parse(localStorage.getItem("myCart"));
            var index = arr.map(function(e) { return e.id; }).indexOf(id);
            if(index!=-1){
                arr[index]["quantity"]+=1;
                localStorage.setItem("myCart",JSON.stringify(arr));
                alert(name)
            }
            else{
                arr.push({"id":id,"quantity":0});
                localStorage.setItem("myCart",JSON.stringify(arr));
                // sessionStorage.setItem("myCart",JSON.stringify(arr));
                this.setState({itemcount:arr.length})
                alert("item added Sucessfully");
            }
        }
        else{
            var arr=[];
            arr.push({"id":id,"quantity":10});
                localStorage.setItem("myCart",JSON.stringify(arr));
                // sessionStorage.setItem("myCart",JSON.stringify(arr));
                this.setState({itemcount:1})
                alert("item added Sucessfully");

        }
    }
    componentDidMount(){
        if(localStorage.getItem('myCart')!=undefined){
            var arr=JSON.parse(localStorage.getItem("myCart"));
            this.setState({itemcount:arr.length})
        }
    }
    clearcart=()=>{
        
        if(localStorage.getItem('myCart')!=undefined){
            localStorage.removeItem('myCart');
            this.setState({itemcount:0})
        }
        
    }
    render() {
        // if(this.state.itemcount>2){
        //     throw new  Error("cart full");
        // }
        return (<>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " onClick={this.cartdata}>Cart<span className="badge badge-light">{this.state.itemcount}</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={this.clearcart.bind(this)}>clear cart</a>
                </li>
                </ul>
            </div>
            </nav>

            <div id="products">
                <h1>Shopping </h1>
               <div className="row" >
                   
                  {console.log(JsonData.products)}
                     
                    {JsonData.products.map(
                        (info)=>{
                            // {alert(info.pname)}
                return(
                    
                    <div className="col-lg-4 col-sm-4" >
                        <div className="card" style={{"margin":"10px"}}>
                        <img src={`${info.images}`} className="card-img-top"  alt={info.images} style={{"width":"auto","height":"300px"}} />
                        <div className="card-body">
                            {/* <p style={{"background-color":"red"}}>id={info.id}</p> */}
                           <p > name={info.pname}</p>
                            <p >price={info.price}</p>
                           <p > quantity={info.quantity}</p>
                           <button className="btn " id={info.id} onClick={this.addcart.bind(this,[info.id,info.pname]) }>Add Cart</button>
                        </div>
                        </div>
                   </div>
                    
                )
            
         }
     )}
                
               </div>
            </div>
            <div id="cart">
                <Cart />
            </div>
            </>
        )
    }
}

export default Product
