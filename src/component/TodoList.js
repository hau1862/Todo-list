import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listTask: this.props.listTask
        }

        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleSaveItem = this.handleSaveItem.bind(this);
    }

    handleDeleteItem(item) {
        const { listTask } = this.state;
        const index = listTask.indexOf(item);

        this.props.handleUpdateListTask([...listTask.slice(0, index), ...listTask.slice(index + 1)]);
    }

    handleSaveItem(item) {
        const { listTask } = this.state;
        const index = listTask.indexOf(item);

        this.props.handleUpdateListTask([...listTask.slice(0, index), item, ...listTask.slice(index + 1)]);
    }

    render() {
        const listTask = this.props.listTask;
        
        return (
            <div className="todo-list">
                {
                    listTask.map((task, index) => {
                        return <TodoItem task={task} key={index} handleDeleteItem={this.handleDeleteItem} handleSaveItem={this.handleSaveItem}/>;
                    })
                }
            </div>
        );
    }
}

export default TodoList;