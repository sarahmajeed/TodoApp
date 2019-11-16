import React,{Component} from "react"


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isEditing: false
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
    render() {
        if(this.state.isEditing) {
            return (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text"></input>
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleRemove}>x</button>
                    <li>{this.props.task}</li>
                </div>
            )
        }
       
    }
}

export default Todo