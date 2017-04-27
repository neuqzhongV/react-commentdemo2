import React from "react"

export default class This extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            msg: "初始化信息"
        }

        this.btnClick2 = this.btnClick2.bind(this,'🍢', '🥙')
    }

    render (){
        return <div>
            <input type="button" value="事件中绑定this并传参" onClick={this.btnClick1.bind(this,'🍕', '🍟')}/> 
            
            <input type="button" value="在构造函数中绑定this并传参" onClick={this.btnClick2} />

            <input type="button" value="在箭头函数中绑定this并传参" onClick={() => { this.btnClick3('🚗', '🚑') }} />

            <input type="button" value="在箭头函数中绑定this并传参方式2" onClick={() => { this.btnClick4('🛴', '✈') }} />
  
        </div>
    }

    btnClick1(arg1,arg2){
        this.setState({
            msg: "事件中绑定this并传参"+ arg1 + arg2
        })
    }
    btnClick2(arg1, arg2) {
        this.setState({
            msg: '在构造函数中绑定this并传参' + arg1 + arg2
        });
    }
    btnClick3(arg1, arg2) {
        this.setState({
            msg: '在箭头函数中绑定this并传参' + arg1 + arg2
        });
    }

    btnClick4 = (arg1, arg2) => {
        this.setState({
            msg: '在箭头函数中绑定this并传参方式2' + arg1 + arg2
        });
    }


}