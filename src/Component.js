import React from 'react'

class Person extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
                <img alt='' src={this.props.image}/>
                <h2>{this.props.description}</h2>
            </div>
        )
    }
}
export default Person