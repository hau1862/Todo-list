import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleSaveItem = this.handleSaveItem.bind(this);
    }

    handleDeleteItem(index) {
        return () => {
            const { listTask } = this.props;
            this.props.handleUpdateListTask([...listTask.slice(0, index), ...listTask.slice(index + 1)]);
        }      
    }

    handleSaveItem(index) {
        return (item) => {
            const { listTask } = this.props;
            this.props.handleUpdateListTask([...listTask.slice(0, index), item, ...listTask.slice(index + 1)]);
        }
    }

    render() {
        const listTask = this.props.listTask;
        
        return (
            <div className="todo-list">
                {
                    listTask.map((task, index) => {
                        return <TodoItem task={task} key={index} handleDeleteItem={this.handleDeleteItem(index)} handleSaveItem={this.handleSaveItem(index)}/>;
                    })
                }
            </div>
        );
    }
}

export default TodoList;