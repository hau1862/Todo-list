import React from "react";
import Lib from "../lib";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickTask = this.handleClickTask.bind(this);
    }

    handleClickTask(event) {
        const isDone = !this.props.task.isDone
        this.props.handleSaveItem({ ...this.props.task, isDone });
    }

    render() {
        let { content, isDone } = this.props.task;
        const className = Lib.classNames("todo-item", { "todo-item--done": isDone });

        return (
            <div className={ className } onClick={ this.handleClickTask }>
                { content }
            </div>
        );
    }
}

export default TodoItem;