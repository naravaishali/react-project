import React from 'react'

class ClassExample extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.productName}</h1>
                <p>Price:<b>{this.props.productPrice}</b></p>
                <p>company:{this.props.productCompany}</p>
            </div>
        )
    }
}
export default ClassExample