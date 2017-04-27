import React from "react"
import PropTypes from "prop-types"

export default class Parent extends React.Component{
    
    getChildContext(){
        return {
            color: 'red'
        }
    }

    static childContextTypes = {
        color:PropTypes.string
    }

    render(){
        return <div>
            <h1>Parent</h1>
            <Middle></Middle>
        </div>
    }

}

class Middle extends React.Component {

    render(){
        return <div>
            <h3>Middle</h3>
            <Son></Son>
        </div>
    }

} 

class Son extends React.Component {

    static contextTypes = {
        color: PropTypes.string
    }

    render(){
        return <div>
            <h5>Son---{this.context.color}</h5>
        </div>
    }

} 

