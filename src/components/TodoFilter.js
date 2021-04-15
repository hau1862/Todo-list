import React from "react";
import Lib from "../lib";

const { FILTER } = Lib;

class TodoFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChangeFilter(newFilter) {
        this.props.handleSetFilter(newFilter);
    }

    render() {
        const numberActiveTask = this.props.numberActiveTask;
        return (
            <div className="todo-filter">
                <div className="todo-task-left">{
                    (numberActiveTask > 1) ? (
                        numberActiveTask + " tasks"
                    ) : (
                        numberActiveTask + " task"
                    )
                } left</div>
                <div className="todo-filter-list">
                    <div className="todo-filter__item todo-filter__item--all" onClick={this.handleChangeFilter.bind(this, FILTER.ALL)}>All</div>
                    <div className="todo-filter__item todo-filter__item--active" onClick={this.handleChangeFilter.bind(this, FILTER.ACTIVE)}>Active</div>
                    <div className="todo-filter__item todo-filter__item--done" onClick={this.handleChangeFilter.bind(this, FILTER.DONE)}>Done</div>
                </div>
                <div className="todo-clear-all" onClick={this.props.handleClearAllTask}>Clear all</div>
            </div>
        );
    }
}

export default TodoFilter;