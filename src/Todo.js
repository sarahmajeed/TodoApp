import React,{Component} from "react"
import './Todo.css'


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isEditing: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
    handleUpdate(event) {
        event.preventDefault();
        //take new task data and pass up to parent
        this.props.updateTodo(this.props.id,this.state.task);
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleToggle (event) {
        this.props.toggleTodo(this.props.id)
    }
    render() {
        if(this.state.isEditing) {
            return (
                <div className="Todo">
                    <form onSubmit={this.handleUpdate}>
                        <input 
                            type="text" 
                            value={this.state.task} 
                            name="task" 
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="Todo">
                    <li 
                        onClick={this.handleToggle} 
                        className={this.props.completed? "Todo-task completed" : "Todo-task"}
                    >
                        {this.props.task}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i class='fas fa-pen'/>
                        </button>
                        <button onClick={this.handleRemove}><i class='fas fa-trash'/></button>
                    </div>
                </div>
            )
        }
       
    }
}

export default Todo