import React, { Component } from 'react'
import employee from '../Data/employee.json'
import Listdetail from './Listdetail'
export class List extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }
    componentDidMount() {
        var node = document.getElementById("products");
        node.style.display = "none"
        var node1 = document.getElementById("cart");
        node1.style.display = "none"
        var node2 = document.getElementById("listdiv");
        node2.style.display = "block"
        var node3 = document.getElementById("applicationdiv");
        node3.style.display = "none"
        var node4 = document.getElementById("productdiv");
        node4.style.display = "none"
    }

    render() {

        return (

            <>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                Sno
                            </th>
                            <th>
                                Employee Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Department
                            </th>
                            <th>
                                Salary
                            </th>
                        </tr>
                    </thead>
                    <tbody id="tbodydata1">

                        {employee.map((item) => {
                            return <Listdetail key={item.id} id={item.id} name={item.name} phone={item.phone} email={item.email} department={item.department} salary={item.salary} />
                        })}

                    </tbody>
                </table>
            </>
        )
    }
}

export default List
