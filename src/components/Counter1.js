import React from 'react'

export default class Counter extends React.Component{
    // ES5中是getDefaultProps【获取默认的属性】
    static defaultProps = {
        initCount : 0
    }
    // 每个组件必须有render函数
    render(){
        // 必须返回一个合法的虚拟DOM或null
        return <div>
            <input type="button" value="我是小黄，打我呀，你打我我就+1"/>
            <h1>统计小黄总共被打了几次：{this.props.initCount}</h1>
        </div>
    }
}