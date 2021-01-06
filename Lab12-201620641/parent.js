import React, {Component} from "react";
import Child, {Component} from "./child";

export default class parent extends Component{

  onChildSubmit(text){
    console.log(text);
  }
  
  render(){
    return(
      <div>
        <Child onSubmit={this.onChildSubmit}/>
      </div>
      //자식 Component에게 submit 함수 자체를 props로 넘겨주고
      //자식이 submit함수에 제출한 text값을 받아서 
      //console.log(text)를 수행한다.
      
    )
  }
}
    
    







  // constructor(props){
  //   super(props);
  //   this.state ={
  //     name="SangJeong"
  //   }
  // }
  // render(){
  //   return (
  //     <Child name = {this.state.name} />
  //     //name = {this.state.name} 을 통해 
  //     //부모 Component에서 자식 Component로props 전달
  //   )
  // }
