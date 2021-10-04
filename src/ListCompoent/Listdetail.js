import React, { Component } from 'react'
export class Listdetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    componentDidMount(){
        
        var data=this.props;
        var parent=document.getElementById("tbodydata1");
        var parentchild=document.createElement("tr");
        var node1=document.createElement("td")
        node1.appendChild(document.createTextNode(data.id-999));
        var node2=document.createElement("td")
        node2.appendChild(document.createTextNode(data.id));
        var node3=document.createElement("td")
        node3.appendChild(document.createTextNode(data.name));
        var node4=document.createElement("td")
        node4.appendChild(document.createTextNode(data.phone));
        var node5=document.createElement("td")
        node5.appendChild(document.createTextNode(data.email));
        var node6=document.createElement("td")
        node6.appendChild(document.createTextNode(data.department));
        var node7=document.createElement("td")
        node7.appendChild(document.createTextNode(data.salary));
        parentchild.appendChild(node1);
        parentchild.appendChild(node2);
        parentchild.appendChild(node3);
        parentchild.appendChild(node4);
        parentchild.appendChild(node5);
        parentchild.appendChild(node6);
        parentchild.appendChild(node7);
        parent.appendChild(parentchild);
        
    }
    render() {
        // console.log(this.props)
        return (
            <></>      
        )
    }
}

export default Listdetail
