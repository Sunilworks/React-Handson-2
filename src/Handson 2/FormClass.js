import React from "react";
import { Component } from "react";

class FormClass extends Component{
    state = {
        Name: ' ',
        EmpData : []
    }
    changeHandle = (event) =>{
        this.setState({[event.target.name] : event.target.value})
        console.log(this.state.Name)
    }   
    clickHandle = () =>{
        let newObj ={
            name: this.state.Name
        }
        this.state.EmpData.push(newObj);
        this.setState({EmpData: this.state.EmpData}) //To Update the Array we have to write this code usind updating State
        console.log(this.state.EmpData);
    }
    render(){
        return(
            <>
            <form>
            <label htmlFor='name'>Name:</label>
            <input id="name" type="text" placeholder="Enter Name" name="Name" value={this.state.Name} onChange={this.changeHandle} required/>

            <button type='button' onClick={this.clickHandle}>Submit</button>
            </form>
            {
                this.state.EmpData.map((item,index) =>{
                    return(
                        <>
                        <span>Name: {item.name} </span>
                        </>
                    )
                })
            }
            </>
        )
    }
}

export default FormClass;