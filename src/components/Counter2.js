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
            count: this.state.count + 1
        })
    }

    // 每个组件必须有render函数
    render(){
        // 必须返回一个合法的虚拟DOM或null
        return <div>
            <input ref="btnAdd" id="btn" type="button" value="我是小黄，打我呀，你打我我就+1"/>
            <h1 id="h1">统计小黄总共被打了几次：{this.state.count}</h1>
        </div>
    }
    componentDidMount(){
        this.refs.btnAdd.onclick = ()=>{
            this.setState({
            count: this.state.count + 1
        },function(){
            console.log('componentDidMount' + document.getElementById('h1').innerText)
        })
        } 
    }
}