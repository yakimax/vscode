import React, { Component } from 'react'

export class Todo extends Component {
  constructor (){
    super();
    this.state = {
      tasks : [{task : 'get milk', id : 2},{task : 'get milk' ,id : 1}],
      currTask : ''
    }
  }
  
  render() {
    return (
      <div>
      
      <input type = "text"/>
      <button>Add Task</button>

      <ul> 
            {this.state.tasks.map((taskobj)=>(
                <li>
                <p>{taskobj}</p>
                <button>Delete</button>
                <li/>
            ))} 
      </ul>
      
      </div>
    );
  }
}

export default Todo