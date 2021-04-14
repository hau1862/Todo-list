import React from "react";
import Lib from "../lib";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props.task,
            isEdit: true
        }

        this.handleChangeContent = this.handleChangeContent.bind(this);
    }

    handleChangeContent(event) {
        if(event.charCode === 13) {
            const newItem = {
                content: this.state.content,
                isDone: this.state.isDone
            };

            this.props.handleSaveItem(newItem);
        }
        else {
            this.setState({ ...this.state, content: event.target.value });
        }
    }
    render() {
        let { content, isDone, isEdit } = this.state;
        if(isDone) {
            this.setState({...this.state, isEdit: false});
        }
        return (
            <div className={ Lib.classNames("todo-item", { "todo-item--done": isDone }, { "todo-item--edit": isEdit }) }>
                {(isEdit) ? (
                    <input type="text" disabled value={content} onKeyPress={this.handleChangeContent} />
                ) : (
                    content
                )}
            </div>
        );
    }
}

export default TodoItem;