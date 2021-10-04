import React, { Component } from 'react'
import '../stylesdata.css'
import month from '../Data/Date.json'
const nameregex = /^[a-zA-Z]+$/
const numberregex = /^[6-9][0-9]{8}$/
const emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const commentregex = /^[a-zA-Z0-9@#*()]{0,100}$/;
const zipregex = /^[0-9]+$/;
export class ApplicationForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: "",
            mname: "",
            lname: "",
            month: "",
            day: "",
            year: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipdata: "",
            email: "",
            phone: "",
            linkedin: "",
            positionapplied: "",
            hearaboutus: "",
            date: "",
            resumefile: "",
            comment: "",
            error1: {
                name: "",
                zipdata: "",
                email: "",
                phone: "",
                comment: ""
            },
            submiterror: "",
            mandatory: ["fname", "month", "day", "year", "address1", "city", "state", "zipdata", "email", "phone", "positionapplied", "hearaboutus", "date", "comment"]
        }
        this.handler = this.handler.bind(this)
        this.submitdata = this.submitdata.bind(this)

    }

    componentDidMount() {
        var node = document.getElementById("products");
        node.style.display = "none"
        var node1 = document.getElementById("cart");
        node1.style.display = "none"
        var node2 = document.getElementById("listdiv");
        node2.style.display = "none"
        var node3 = document.getElementById("applicationdiv");
        node3.style.display = "block"
        var node4 = document.getElementById("productdiv");
        node4.style.display = "none"
    }
    submitdata = (event) => {
        var status = 0;
        this.state.mandatory.map(item => {
            console.log(item)
            console.log(this.state[item] === "")
            if (this.state[item] === "") {
                status = 1;
                console.log(this.state[item])
                var mandatoryitem = document.getElementById(item);
                mandatoryitem.style.backgroundColor = "red";
            }
            else {
                var mandatoryitem = document.getElementById(item);
                mandatoryitem.style.backgroundColor = "";
            }
        })
        if (status == 1) {
            this.setState({ submiterror: "Fill All Required Feild" })
        }
        else {
            this.setState({ submiterror: "" })
            alert("Form Submit")
        }
    }
    handler = (event) => {

        const { name, value } = event.target;
        var status = 0;
        if (name === 'fname' || name === 'mname' || name === 'lname') {
            status = 1;

            if (!nameregex.test(value)) {

                this.setState(prevState => ({
                    error1: {                   // object that we want to update
                        ...prevState.error1,  // keep all other key-value pairs
                        name: 'only alphabets required'      // update the value of specific key
                    }
                }))
            }
            else {
                this.setState(prevState => ({
                    error1: {                   // object that we want to update
                        ...prevState.error1, // keep all other key-value pairs
                        name: ''      // update the value of specific key
                    }
                }))

                return this.setState({ [name]: value });
            }
        }
        if (name === 'zipdata') {
            status = 1;
            if (!zipregex.test(value)) {

                this.setState(prevState => ({
                    error1: {                   // object that we want to update
                        ...prevState.error1,    // keep all other key-value pairs
                        postalzipcode: 'only number required'      // update the value of specific key
                    }
                }))
            }
            else {
                this.setState(prevState => ({
                    error1: {                   // object that we want to update
                        ...prevState.error1,    // keep all other key-value pairs
                        postalzipcode: ''      // update the value of specific key
                    }
                }))
                return this.setState({ [name]: value });
            }
        }
        if (name === 'email') {
            status = 1;
            if (!emailregex.test(value)) {

                this.setState(prevState => ({
                    error1: {                   // object that we want to update
                        ...prevState.error1,    // keep all other key-value pairs
                        email: 'invalid output'      // update the value of specific key
                    }
                }))
            }
            else {
                this.setState(prevState => ({
                    error1: {                   // object that we want to update
                        ...prevState.error1,    // keep all other key-value pairs
                        email: ''      // update the value of specific key
                    }
                }))
                return this.setState({ [name]: value });
            }
        }
        if (name === 'phone') {
            status = 1;
            if (!numberregex.test(value)) {

                this.setState(prevState => ({
                    error1: {                   // object that we want to update
                        ...prevState.error1,    // keep all other key-value pairs
                        phone: 'invalid number'      // update the value of specific key
                    }
                }))
            }
            else {

                this.setState(prevState => ({
                    error1: {                   // object that we want to update
                        ...prevState.error1,    // keep all other key-value pairs
                        phone: ''      // update the value of specific key
                    }
                }))

                return this.setState({ [name]: value });
            }
        }
        if (name === 'comment') {
            status = 1;
            if (!commentregex.test(value)) {

                this.setState(prevState => ({
                    error1: {                   // object that we want to update
                        ...prevState.error1,    // keep all other key-value pairs
                        comment: 'not more than 100 alphabets'      // update the value of specific key
                    }
                }))
            }
            else {
                this.setState(prevState => ({
                    error1: {                   // object that we want to update
                        ...prevState.error1,    // keep all other key-value pairs
                        comment: ''      // update the value of specific key
                    }
                }))
                return this.setState({ [name]: value });
            }
        }
        if (status === 0) {
            this.setState({ [name]: value });
        }
        // alert()
        // this.setState({[name]:value})
    }
    componentDidMount() {
        var monthelem = document.getElementById("month");
        var dayelem = document.getElementById("day");
        var yearelem = document.getElementById("year");
        var node = document.createElement('option');
        var date = new Date();
        monthelem.innerHTML = "";
        dayelem.innerHTML = "";
        yearelem.innerHTML = "";
        node.appendChild(document.createTextNode(" "))

        monthelem.appendChild(node)
        dayelem.appendChild(node)
        yearelem.appendChild(node)
        month.Month.map(item => {
            var node = document.createElement('option');
            node.appendChild(document.createTextNode(item))
            node.value = item;
            monthelem.appendChild(node)
        })
        for (var i = 1; i <= 31; i++) {
            var node = document.createElement('option');
            node.appendChild(document.createTextNode(i))
            node.value = i;
            dayelem.appendChild(node)
        }
        for (var i = date.getFullYear(); i >= 1990; i--) {
            var node = document.createElement('option');
            node.appendChild(document.createTextNode(i))
            node.value = i;
            yearelem.appendChild(node)
        }

    }
    render() {
        return (
            <div className="container text-left p-4">
                <h1>Job Application</h1>
                <p>Please complete the form below to apply for a position with us.</p>
                <form className="p-2" style={{ border: "1px solid black" }} onSubmit={() => this.submitdata}>
                    <div className="form-group fullnamediv">
                        <small className="required"> Mendatory=</small>
                        <div className="p-4">
                            <label htmlFor="namefeild" className="required">Full Name</label>
                            {(this.state.error1.name) !== "" ? <>{this.state.error1.name}</> : <></>}
                            <div className="row" id="namefeild">
                                <div className="col-lg-4">
                                    <input type="text" className="form-control  " id="fname" name="fname" autoComplete="nope" onChange={this.handler} />
                                    <small className="required"> First Name</small>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control " id="mname" name="mname" autoComplete="nope" onChange={this.handler} />
                                    <small> Middle Name</small>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control " id="lname" name="lname" autoComplete="nope" onChange={this.handler} />
                                    <small> Last Name</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group Birthdatediv" >
                        <div className="p-4">
                            <label htmlFor="exampleInputEmail1" className="required">Birth Date</label>
                            <div className="row">
                                <div className="col-lg-4">
                                    <select className="form-select" aria-label="Default select example" id="month" name="month" onChange={this.handler} defaultValue="">

                                    </select><br />
                                    <small> Month</small>
                                </div>
                                <div className="col-lg-4">
                                    <select className="form-select" aria-label="Default select example" id="day" name="day" onChange={this.handler} defaultValue="">

                                    </select><br />    <small> Day</small>
                                </div>
                                <div className="col-lg-4">
                                    <select className="form-select" aria-label="Default select example" id="year" name="year" onChange={this.handler} defaultValue="">

                                    </select><br />    <small> Year</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group container addressdiv">
                        <label htmlFor="address1" className="required">Current Address</label>
                        <input type="text" className="form-control" id="address1" autoComplete="nope" name="address1" onChange={this.handler} />
                        <small className="required">Street Address</small>
                        <input type="text" className="form-control" id="address2" autoComplete="nope" name="address2" onChange={this.handler} />
                        <small>Street Address Line 2</small>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" className="form-control " id="city" autoComplete="nope" name="city" onChange={this.handler} />
                                <small className="required"> City</small>
                            </div>

                            <div className="col-lg-6">
                                <input type="text" className="form-control " id="state" autoComplete="nope" name="state" onChange={this.handler} />
                                <small className="required"> State/Province</small>
                            </div>
                        </div>
                        {(this.state.error1.zipdata) !== "" ? <>{this.state.error1.zipdata}</> : <></>}
                        <input type="text" className="form-control" id="zipdata" autoComplete="nope" name="zipdata" onChange={this.handler} />
                        <small>Postal Zip Code</small>
                    </div>
                    <div className="form-group contactdetaildiv container p-2" >
                        {(this.state.error1.email) !== "" ? <>{this.state.error1.email}</> : <></>}
                        <label htmlFor="exampleInputEmail1" className="required">Email address</label>
                        <input type="text" className="form-control" id="email" placeholder="myname@example.com" autoComplete="nope" name="email" onChange={this.handler} />
                        <small>Example@Example.com</small><br /></div>
                    <div className="form-group contactdetaildiv container p-2">

                        {(this.state.error1.phone) !== "" ? <>{this.state.error1.phone}</> : <></>}
                        <label htmlFor="phonenumber" className="required">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="(0-000-00000)" autoComplete="nope" name="phone" onChange={this.handler} />
                    </div><div className="form-group contactdetaildiv container p-2">
                        <label htmlFor="LinkedIn">LinkedIn</label>
                        <input type="text" className="form-control" id="LinkedIn" name="linkedin" onChange={this.handler} />
                    </div>
                    <hr />
                    <div className="form-group contactdetaildiv container p-2" style={{ width: "40%", marginLeft: "0px" }}>
                        <label htmlFor="positionapplied" className="required" >Position Applied</label>
                        <select className="form-select" id="positionapplied" name="positionapplied" onChange={this.handler} defaultValue="">
                            <option >Please Select</option>
                            <option value="Market Specialist">Market Specialist</option>
                            <option value="Sales Manager">Sales Manager</option>
                            <option value="Product Lead">Product Lead</option>
                            <option value="Developer">Developer</option>
                        </select>
                    </div>
                    <div className="form-group contactdetaildiv container p-2" style={{ width: "40%", marginLeft: "0px" }}>

                        <label htmlFor="hearaboutus" className="required">How did you hear about us</label>
                        <select className="form-select" id="hearaboutus" name="hearaboutus" onChange={this.handler} defaultValue="">
                            <option >Please Select</option>
                            <option vaue="College">College</option>
                            <option value="Friend">Friend</option>
                            <option value="Website">Website</option>
                            <option value="Advertisement">Advertisement</option>
                            <option value="Others">Others</option>
                        </select>
                    </div><div className="form-group contactdetaildiv container p-2" style={{ width: "40%", marginLeft: "0px" }}>
                        <label htmlFor="Datepick" className="required">Available Start Date
                        </label>
                        <input type="date" className="form-control" id="date" name="date" onChange={this.handler} />
                    </div>
                    <div className="form-group contactdetaildiv container p-2" style={{ width: "40%", marginLeft: "0px" }}>
                        <label htmlFor="hearaboutus" className="required">Upload Your Resume</label>
                        <div>
                            <input type="file" className="form-control-file" id="uploadfile" name="resumefile" />
                        </div>
                    </div>
                    <div className="form-group contactdetaildiv container p-4" >
                        {(this.state.error1.comment) !== "" ? <>{this.state.error1.comment}</> : <></>}
                        <label htmlFor="comment">Comment</label>
                        <textarea className="form-control" id="comment" rows="3" name="comment" onChange={this.handler}></textarea>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={this.submitdata}>Submit</button>
                </form>
            </div>
        )
    }
}

export default ApplicationForm
