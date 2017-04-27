import React from "react"
import PropTypes from "prop-types"

export default class Parent extends React.Component{
    
    getChildContext(){
        return {
            color: 'red',
            fontSize: 24,
            fontFamily: "lisu"
        }
    }

    static childContextTypes = {
        color: PropTypes.string,
        fontSize: PropTypes.number,
        fontFamily: PropTypes.string

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
        color: PropTypes.string,
        fontSize:PropTypes.number,
        fontFamily: PropTypes.string
    }

    render(){
        return <div>
            <h5 style={{color:this.context.color,fontSize:this.context.fontSize,fontFamily:this.context.fontFamily}}>父给子传递参数{this.context.color}</h5>
        </div>
    }

} 

