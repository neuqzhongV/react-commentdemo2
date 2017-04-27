import React from "react"

import Comment from "./Comment"
import CommentText from "./CommentText"

export default class CommentList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comments: [
                {user:'zs',content:'张三，你好！！😁'},
                {user:'ls',content:'李四，再见！！😎'}
            ]
        }
    }

    render(){
        return <div>
            {/*发表评论框*/}
            <CommentText reloadCommentList={this.getCommentList}></CommentText>
            <ul>
                {/*评论内容列表*/}
                {this.state.comments.map(this.createComment)}
            </ul>
        </div>
    }

    //创建每一条的评论数据
    createComment = (item,i) => {
        return <Comment key={i} {...item}></Comment>
    }

    //组件加载完成后，调用此函数
    componentDidMount(){
        this.getCommentList();
    }

    getCommentList = () => {
        var list = JSON.parse(localStorage.getItem('comments')||'[]')
        this.setState({
            comments: list
        })
    }
    
}