import React,{Component} from "react"
import Todo from './Todo'
import NewTodoForm from "./NewTodoForm";


class TodoList extends Component{
    constructor() {
        super();
        this.state = {
            todos: []
         }
         this.create = this.create.bind(this);
         this.remove = this.remove.bind(this);

    }
    create(newTodo){
        this.setState({
            todos:[...this.state.todos, newTodo]
        })
    }
    remove(id) {
        this.setState({
            todos:this.state.todos.filter(t => t.id !== id)
        })
    }
    render() {
        const todos = this.state.todos.map(todo=> {
            return <Todo key={todo.id} id={todo.id} removeTodo={this.remove} task = {todo.task} />
        })
        return (
            <div>
                <h1>Todo List!</h1>
                <NewTodoForm createTodo={this.create}/>
                <ul>
                   {todos}
                </ul>
            </div>
        )
    }
}

export default TodoList;