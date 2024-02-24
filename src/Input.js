import axios from 'axios'
import React, { Component } from 'react'

export default class Input extends Component {
    state = {
        firstname: "",
        username: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {


        axios.post("https://reqres.in/api/users", {
            name:this.state.firstname, email: this.state.username
        })
        .then((res) =>{
            console.log(res.data)
        })
        // fetch("https://reqres.in/api/users", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ name: this.state.firstname, email: this.state.username })
        // })
        //     .then((res) => {
        //         console.log(res)
        //         return res.json()
        //     })
        //     .then((jsonRes) => {
        //         console.log(jsonRes)
        //     })
        }


    render() {
        return (
            <div>
                <h1>
                    {this.state.firstname}
                    {this.state.username}
                </h1>
                <p>
                    <input
                        name="firstname"
                        onChange={this.handleChange}
                        placeholder='Enter name' />
                </p>
                <p>
                    <input
                        name="username"
                        onChange={this.handleChange}
                        placeholder='Enter username' />
                </p>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}
