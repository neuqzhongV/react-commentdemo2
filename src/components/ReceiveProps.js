import React from "react"

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            typeInfo: "in_theaters"
        }
    }

    render(){
        return <div>
            <h3>父组件</h3>
            <input type="button" value="in_theaters" onClick={()=>{this.setType('in_theaters')}}/>   
            <input type="button" value="coming_soon" onClick={()=>{this.setType('coming_soon')}}/> 
            <input type="button" value="top250" onClick={()=>{this.setType('top250')}}/> 
            <hr/>

            <Son {...this.state}></Son>
        </div>
    }

    setType =(type)=>{
        this.setState({
            typeInfo: type
        },()=>{
            console.log(this.state.typeInfo)
        })
    }
}

class Son extends React.Component {
    render(){
        return <div>
            <h3>子组件</h3>
            <p>当前的电影类型：{this.props.typeInfo}</p>
        </div>
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.typeInfo)
    }
}

export default Parent