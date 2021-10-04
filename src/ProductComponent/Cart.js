import React, { Component } from 'react'
import '../stylesdata.css'
export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.additem=this.additem.bind(this);
        this.removeitem=this.removeitem.bind(this);
    }
    
    additem=(event)=>{
        var id=event.target.id;
        var arr=JSON.parse(localStorage.getItem("myCart"));
            var index = arr.map(function(e) { return e.id; }).indexOf(parseInt(id));
                arr[index]["quantity"]+=1;
                localStorage.setItem("myCart",JSON.stringify(arr));
                this.updatecart()
            
    }
    removeitem=(event)=>{
        
        var id=event.target.id;
        var arr=JSON.parse(localStorage.getItem("myCart"));
            var index = arr.map(function(e) { return e.id; }).indexOf(parseInt(id));
            
                arr[index]["quantity"]-=1;
                if(arr[index]["quantity"]===0){
                    arr.splice(index,1)
                    this.props.decreasecount()
                }
                localStorage.setItem("myCart",JSON.stringify(arr));
                this.updatecart()
    }
    updatecart(){
        var node=document.getElementById("cartdata");
        node.innerHTML="";
        var arr=JSON.parse(localStorage.getItem("myCart"));
        var data1=this.props.datafile;
        var sno=1;
        var TotalPrice=0;
        if(this.props.statuspage===1){
        arr.map(item=>{
            var index = this.props.datafile.map(function(e) { return e.id; }).indexOf(item.id);
            var node1=document.createElement("td");
            var node2=document.createElement("td");
            var node3=document.createElement("td");
            var node4=document.createElement("td");
            var node5=document.createElement("td");
            var node6=document.createElement("button");
            var node7=document.createElement("button");
            var noderow=document.createElement("tr");
            node1.appendChild(document.createTextNode(sno));
            node2.appendChild(document.createTextNode(this.props.datafile[index].pname))
            node3.appendChild(document.createTextNode(item.quantity))
            node4.appendChild(document.createTextNode(parseInt(item.quantity)*parseInt(data1[index].price)))
            node6.appendChild(document.createTextNode("+"));
            node6.classList.add("btn" ,"btn-sm","mr-2","button")
            node6.addEventListener("click",this.additem)
            node6.setAttribute("id",item.id)
            node7.appendChild(document.createTextNode("-"));
            node7.addEventListener("click",this.removeitem)
            node7.setAttribute("id",item.id)
            node7.classList.add("btn" ,"btn-sm","button")
            node5.appendChild(node6)
            node5.appendChild(node7)
            noderow.appendChild(node1)
            noderow.appendChild(node2)
            noderow.appendChild(node3)
            noderow.appendChild(node4)
            noderow.appendChild(node5)
            node.appendChild(noderow)
            sno+=1;
            TotalPrice+=parseInt(item.quantity)*parseInt(data1[index].price)
        })

        var totalprice=document.getElementById("totalprice");
        totalprice.innerText=TotalPrice;
    }
    }
    componentDidMount(){
        if(localStorage.getItem('myCart')!=undefined){
            this.updatecart();
        }
        if(this.props.statuspage===1){
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
    componentDidUpdate(){
        if(localStorage.getItem('myCart')!=undefined){
            this.updatecart();
        }
        if(this.props.statuspage===1){
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

            <div className="cartbody ">
            <h1>Your Cart</h1>
            <div className="container mt-4   cartstyles" style={{border:"1px solid black" ,width:"500px", height:"470px"}}>
               <div id="emptycart" style={{marginTop:"170px"}}><h1>Cart is empty</h1></div>
               <div id="fullcart">
               <div id="datadiv"  className="table-wrapper-scroll-y my-custom-scrollbar mt-4">
                <div className="table-wrapper-scroll-y my-custom-scrollbar bg-primar">
                    <table className="table table-bordered table-striped mb-0 w-2">
                      <thead>
                          <tr>
                          <th>
                              Sno
                          </th>
                          <th>
                              Propduce Name
                          </th>
                          <th>
                              Quantity
                          </th>
                          <th>
                              price
                          </th>
                          <th>

                          </th>
                          </tr>
                      </thead>
                        <tbody id="cartdata">

                        </tbody>
                    </table>
                    </div>
                        <h4 style={{marginLeft:"250px"}}>Total Price:<span id="totalprice"></span></h4>


               </div>
               </div>
            </div>
            </div>
        )
    }
}

export default Cart
