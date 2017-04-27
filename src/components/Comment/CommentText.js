//发表评论的组件

import React from 'react'

export default class CommentText extends React.Component{

    render(){
        return <div>
            <input  ref="textUser" type="text"/><br />
            <textarea ref="textContent" cols="30" rows="10" ></textarea><br/>
            <input type="button" value="发表评论" onClick={this.addComment}/>
        </div>
    }

    addComment = () => {
        //1.获取用户名和评论内容
        const user = this.refs.textUser.value.trim();
        const content = this.refs.textContent.value.trim();
        //2.将评论数据组成一个对象
        const comment = {user:user,content:content};
        //3.获取localStorage里的comment数据，将新添加的数据添加进原数据中，再存储到localStorage中
        var commentList = JSON.parse(localStorage.getItem("comments")||"[]");
        commentList.unshift(comment);
        console.log(commentList)
        localStorage.setItem("comments",JSON.stringify(commentList));
        //4.存储完后，调用父元素传递过来的重新获取数据的方法
        this.props.reloadCommentList();
    }
}