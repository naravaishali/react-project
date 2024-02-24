import React, { Component } from 'react'

export default class State extends Component {
state={
    name:"vaishali",
    city:"hyderabad",
    students:[
      { name:"vaish", age:"22", gender:"female"},
      { name:"megha", age:"21", gender:"female"},
      { name:"sonu", age:"20", gender:"female"}
    ],

      flowers:[
        {name:"rose", color:"red"},
        {name:"lilly", color:"white"},
        {name:"sunflower", color:"red"}
       

      ]

}
  render() {
    return (
      <div>
        <p>Name:{this.state.name}</p>
        <p>city:{this.state.city}</p>
        {
        this.state.students.map((std)=>(
          <div>
            <p>name :{std.name}</p>
            <p>age :{std.age}</p>
            <p>gender:{std.gender}</p>
            </div>
        ))}
         {
        this.state.flowers.map((flo)=>(
          <div>
            <p>name :{flo.name}</p>
            <p>color :{flo.color}</p>
        
            </div>
        ))}
      </div>
    )
  }
}
