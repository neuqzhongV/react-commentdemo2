// 入口文件
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/this'
import Props from './components/ReceiveProps'
import Parent from './components/Context2'
import CommentList from './components/Comment/CommentList'

ReactDOM.render(<div>
     
   {/*<Props></Props>*/}
   {/*<Counter></Counter>*/}
   {/*<Parent></Parent>*/}
   <CommentList></CommentList>
</div>,document.getElementById('app'));