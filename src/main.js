// 入口文件
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter1'

ReactDOM.render(<div>
    <Counter initCount={0}></Counter>
    <hr/>
    <Counter></Counter>
</div>,document.getElementById('app'));