import React from "react";
import Lib from "../lib";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClickTask = this.handleClickTask.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleRequireChangeContent = this.handleRequireChangeContent.bind(this);
        this.handleEditContent = this.handleEditContent.bind(this);
        this.handleSaveContent = this.handleSaveContent.bind(this);
    }

    handleClickTask(event) {
        let item = this.props.task;

        if(event.target.checked) {
            item.isDone = true;
            this.props.handleSaveItem(item);
        }
        else {
            item.isDone = false;
            this.props.handleSaveItem(item);
        }
        
    }

    handleEditContent(event) {
        if(event.target.isContentEditable) {

            if(event.charCode === 13) {
                this.handleSaveContent(event);
            }
        }
    }

    handleSaveContent(event) {
        const content = event.target.innerText.trim();
        if(content) {
            const item = {
                ...this.props.task,
                content
            };

            this.props.handleSaveItem(item);
        }
        else {
            event.target.innerText = this.props.task.content;
        }
        event.target.setAttribute("contentEditable", "false");
    }

    handleChangeContent(event) {
        if(event.target.isContentEditable) {
            this.handleSaveContent(event);
        }
    }

    handleRequireChangeContent(event) {
        if(!this.props.task.isDone) {
            event.target.setAttribute("contentEditable", "true");
        }
    }

    render() {
        let { content, isDone } = this.props.task;
        const className = Lib.classNames("todo-item", { "todo-item--done": isDone });
        return (
            <div className={ className }>
                <input type="checkbox" checked={isDone} className="todo-item__check" onClick={ this.handleClickTask }/>
                <p className="todo-item__content" onDoubleClick={this.handleRequireChangeContent} onKeyPress={this.handleEditContent} onBlur={this.handleChangeContent}>{content}</p>
                <div className="todo-item__delete" onClick={this.props.handleDeleteItem}>x</div>
            </div>
        );
    }
}

export default TodoItem;