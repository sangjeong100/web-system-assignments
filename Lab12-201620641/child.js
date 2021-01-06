import React, {Component} from "react";
import Parent, {Component} from "./parent";

export default class Child extends Component{

  state = { text: ''};

  onFormSubmit = e => {
    e.preventDefault(); // onSubmit의 원래 기능을 막음
    this.props.onSubmit(this.state.text);
    //부모 Component로부터 받은 onSubmit(onChildSubmit)함수의 인자로 
    //자식 Component의 text.value를 넘겨준다. 
    //(즉, 자식에서 부모로 Props가 전달되었다.)
  }


  render(){
    return(
      //form을 제출할 때, 자식에서 부모로 Props 전달
    <div>
      <form onSubmit={this.onFormSubmit}>
        <input 
          value={this.state.text} 
          onChange={(e) => {this.setState({text: e.target.value})}}/>
      </form>
    </div>
    )
  }
}




//   render(){
//     return (
//       <p>
//         {this.props.name} 
//       </p>
//       //parent 에게 전달받은 props안의 name을 출력한다.     
//     )
//   }
// }
