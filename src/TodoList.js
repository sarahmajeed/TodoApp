import React,{Component} from "react"
import Todo from './Todo'
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'


class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            completed:false
         }
         this.create = this.create.bind(this);
         this.remove = this.remove.bind(this);
         this.update = this.update.bind(this);
         this.toggleTodo = this.toggleTodo.bind(this);

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
    update(id, updatedTask) { //What are we updating, update
        const updatedTodos = this.state.todos.map(todo=> {
            if(todo.id === id){
                return{...todo, task:updatedTask}
            }
            return todo;
        });
        this.setState({
            todos: updatedTodos
        })
    }
    toggleTodo (id) {
        this.setState({
            completed: !this.state.completed
        })
    }
    render() {
        const todos = this.state.todos.map(todo=> {
            return <Todo 
                key={todo.id} 
                id={todo.id} 
                removeTodo={this.remove} 
                task = {todo.task} 
                updateTodo = {this.update}
                completed = {this.state.completed} 
                toggleTodo = {this.toggleTodo}
            />
        })
        return (
            <div className="todoList">
                <h1>React Todo List!<span>A Simple React Todo List</span></h1>
                
                <ul>
                   {todos}
                </ul>

                <NewTodoForm createTodo={this.create}/>
            </div>
        )
    }
}

export default TodoList;