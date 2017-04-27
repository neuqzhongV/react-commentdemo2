import React from 'react'

export default class Comment extends React.Component{

    render(){
        return <li>
            <h3>{this.props.content}</h3>
            <p>{this.props.user}</p>
        </li>
    }

}