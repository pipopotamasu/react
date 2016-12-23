import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      }

      this.updateState = this.updateState.bind(this);
      this.createTodo = this.createTodo.bind(this);
  }

  updateState(e) {
    this.setState({input: e.target.value});
  }

  createTodo(e) {
    e.preventDefault();
    if(this.state.input){
      this.props.onAdd(this.state.input);
      this.setState({input: ''});
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.input}
          onChange={this.updateState}
         />
         <button onClick={this.createTodo}>save</button>
       </form>
    )
  }
}

function TodoList(props) {
  let list = props.todos.map(function(todo, i) {
    return <li key={i}>{todo}</li>
  });

  return <ul>{list}</ul>
}



export default class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todo) {
      this.setState({todos:this.state.todos.concat(todo)});
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <TodoForm onAdd={this.addTodo}/>
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}
