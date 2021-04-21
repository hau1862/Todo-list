import React from "react";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import Lib from "./lib";

const { FILTER } = Lib;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: FILTER.ALL,
            listTask: [
                { content: "Play Game", isDone: false },
                { content: "Go to bed", isDone: false },
            ],
        };

        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleUpdateListTask = this.handleUpdateListTask.bind(this);
        this.handleCompleteAllTask = this.handleCompleteAllTask.bind(this);
        this.handleIncompleteAllTask = this.handleIncompleteAllTask.bind(this);
        this.handleCheckAllTask = this.handleCheckAllTask.bind(this);
        this.handleCheckFilter = this.handleCheckFilter.bind(this);
        this.handleSetFilter = this.handleSetFilter.bind(this);
        this.handleClearAllTask = this.handleClearAllTask.bind(this);
        this.handleCountActiveTask = this.handleCountActiveTask.bind(this);
    }

    handleAddItem(newItem) {
        const { listTask } = this.state;

        this.setState({
            listTask: listTask.concat(newItem),
        });
    }

    handleUpdateListTask(newListTask) {
        this.setState({
            listTask: newListTask,
        });
    }

    handleCompleteAllTask() {
        let listTask = this.state.listTask;

        listTask.forEach(function (task) {
            task.isDone = true;
        });

        this.setState({ listTask });
    }

    handleIncompleteAllTask() {
        let listTask = this.state.listTask;

        listTask.forEach(function (task) {
            task.isDone = false;
        });

        this.setState({ listTask });
    }

    handleSetFilter(newFilter) {
        this.setState({
            // ...this.state,
            filter: newFilter,
        });
    }

    handleCheckAllTask() {
        const { listTask } = this.state;
        if (listTask.length > 0) {
            return listTask.every(function (task) {
                return task.isDone;
            });
        } else {
            return false;
        }
    }

    handleCountActiveTask() {
        return this.state.listTask.filter(function (task) {
            return !task.isDone;
        }).length;
    }

    handleCheckFilter(item) {
        switch (this.state.filter) {
            case FILTER.ALL: {
                return true;
            }
            case FILTER.ACTIVE: {
                return !item.isDone;
            }
            case FILTER.DONE: {
                return item.isDone;
            }
            default: {
                return true;
            }
        }
    }

    handleClearAllTask() {
        this.setState({
            listTask: [],
        });
    }

    render() {
        const listTask = this.state.listTask.filter(this.handleCheckFilter);

        return (
            <div className="container">
                <div className="todo-heading">TODO APP</div>
                <div className="todo-header">
                    <TodoAdd
                        handleAddItem={this.handleAddItem}
                        handleCompleteAllTask={this.handleCompleteAllTask}
                        handleIncompleteAllTask={this.handleIncompleteAllTask}
                        checkAllTask={this.handleCheckAllTask()}
                    />
                </div>
                <div className="todo-body">
                    <TodoList
                        listTask={listTask}
                        handleUpdateListTask={this.handleUpdateListTask}
                    />
                </div>
                <div className="todo-footer">
                    <TodoFilter
                        numberActiveTask={this.handleCountActiveTask()}
                        handleSetFilter={this.handleSetFilter}
                        handleClearAllTask={this.handleClearAllTask}
                    />
                </div>
            </div>
        );
    }
}

export default App;
