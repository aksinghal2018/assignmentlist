import React, { Component } from 'react'
import employee from '../Data/employee.json'
import Listdetail from './Listdetail'
export class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        
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
            
                            {employee.map((item)=>{
           return <Listdetail key={item.id} id={item.id} name={item.name} phone={item.phone} email={item.email} department={item.department} salary={item.salary}/>
        })}
                            
                   </tbody>
                </table>
            </>
        )
    }
}

export default List
