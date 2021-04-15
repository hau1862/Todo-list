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
        this.handleCompleteAllTask = this.handleCompleteAllTask.bind(this);
        this.handleIncompleteAllTask = this.handleIncompleteAllTask.bind(this);
        this.handleCheckAllTask = this.handleCheckAllTask.bind(this);
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

    handleCompleteAllTask() {
        let listTask = this.state.listTask;

        listTask.forEach(function(task) {
            task.isDone = true;
        })

        this.setState({ listTask });
    }

    handleIncompleteAllTask() {
        let listTask = this.state.listTask;

        listTask.forEach(function(task) {
            task.isDone = false;
        })

        this.setState({ listTask });
    }

    handleCheckAllTask() {
        const { listTask } = this.state;
        return listTask.every(function(task) {
            return task.isDone;
        });
    }

    render() {
        const { listTask } = this.state;
        
        return (
            <div className="container">
                <div className="todo-heading">TODO APP</div>
                <div className="todo-body">
                    <AddItem handleAddItem={ this.handleAddItem } handleCompleteAllTask={this.handleCompleteAllTask} handleIncompleteAllTask={this.handleIncompleteAllTask} checkAllTask={this.handleCheckAllTask()}/>
                    <TodoList listTask={listTask} handleUpdateListTask={this.handleUpdateListTask}/>
                </div>
            </div>
        );
    }
}

export default App;
