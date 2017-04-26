import React from 'react'

import PropTypes from 'prop-types'

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: props.initCount
        }
    }

    // ES5中是getDefaultProps【获取默认的属性】
    static defaultProps = {
        initCount : 0
    }

    static propTypes = {
        initCount: PropTypes.number
    }
    //组件将要挂载到页面上
    componentWillMount(){
        this.setState({
            // count: this.state.count + 1
        })
    }

    // 每个组件必须有render函数
    render(){
        // 必须返回一个合法的虚拟DOM或null
        return <div>
            <input id="btn" type="button" value="我是小黄，打我呀，你打我我就+1" onClick={this.addCount}/>
            <h1 ref="h1" id="h1">统计小黄总共被打了几次：{this.state.count}</h1>
        </div>
    }
    addCount=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        //return true 则会执行后续的一系列事件后，执行render，重新渲染页面
        //return false 则会退回到运行状态中，不在执行后续的一系列事件
        // return nextState.count%2===0;
        return true
    }

    //组件将要被更新
    componentWillUpdata(){
        console.log(this.refs.h1.innerText)
    }

    //组件已经完成更新
    componentDidUpdate(){
        // console.log(this.refs.h1.innerText)
    }
}