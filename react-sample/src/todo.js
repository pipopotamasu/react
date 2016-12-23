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
    return <TodoTask todo={todo} onToggle={props.onToggle} />
  });

  return <ul>{list}</ul>
}

function TodoTask(props){
  let todoText = props.todo.isCompleted ? <s>{props.todo.text}</s> : props.todo.text;
  return <li key={props.no}><input type="checkbox" onChange={(e) => {props.onToggle(props.todo)}} />{todoText}</li>
}



export default class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    addTodo(todoText) {
      console.log(this.state.todos);
      const todo = {
        text: todoText,
        isCompleted: false,
        no: this.state.todos.length + 1
      };

      this.setState({todos:this.state.todos.concat(todo)});
    }

    toggleTodo(toggledTodo) {
      console.log(this.state.todos);
       const newTodos = this.state.todos.map(function(todo, i){
         if(todo.no == toggledTodo.no){
           toggledTodo.isCompleted = !toggledTodo.isCompleted;
           return toggledTodo;
         }
         return todo;
       });

       console.log(newTodos);
       this.setState({todos:newTodos});
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <TodoForm onAdd={this.addTodo}/>
                <TodoList todos={this.state.todos} onToggle={this.toggleTodo} />
            </div>
        );
    }
}
