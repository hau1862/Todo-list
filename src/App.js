import React from "react";
import './App.css';
import AddItem from "./component/AddItem";
import TodoList from "./component/TodoList";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listTask: [
                { content: "Play Game", isDone: false },
                { content: "Go to bed", isDone: false }
            ]
        };

        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleUpdateListTask = this.handleUpdateListTask.bind(this);
    }

    handleAddItem(newItem) {
        const { listTask } = this.state;

        this.setState({
            listTask: listTask.concat(newItem)
        })
    }

    handleUpdateListTask(newListTask) {
        this.setState({
            listTask: newListTask
        })
    }

    render() {
        const { listTask } = this.state;
        return (
            <div className="container">
                <div className="todo-heading">TODO APP</div>
                <AddItem handleAddItem={ this.handleAddItem }/>
                <TodoList listTask={listTask} handleUpdateListTask={this.handleUpdateListTask}/>
            </div>
        );
    }
}

export default App;
