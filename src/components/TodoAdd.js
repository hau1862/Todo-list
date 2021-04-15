import React from "react";

class TodoAdd extends React.Component {
    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleClickAll = this.handleClickAll.bind(this);
    }

    handleKeyPress(event) {        
        if(event.charCode === 13) {
            const content = event.target.value.trim();
            if(content) {
                const newItem = {
                    content,
                    isDone: false
                };
                this.props.handleAddItem(newItem);
            }
            event.target.value = "";
        }
    }

    handleClickAll(event) {
        if(event.target.checked) {
            this.props.handleCompleteAllTask();
        }
        else {
            this.props.handleIncompleteAllTask();
        }
    }

    render() {
        return (
            <div className="todo-add">
                <input type="checkbox" checked={this.props.checkAllTask} className="todo-add__check" onChange={this.handleClickAll}/>
                <input className="todo-add__input" placeholder="Enter new task" type="text" onKeyPress={this.handleKeyPress} />
            </div>
        );
    }
}

export default TodoAdd;