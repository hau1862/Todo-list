import React from "react";

class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event) {
        if(event.charCode === 13) {
            const newItem = {
                content: this.state.content,
                isDone: false
            };

            this.props.handleAddItem(newItem);
        }
        else {
            this.setState({ content: event.target.value });
        }
    }

    render() {
        return (
            <div className="add-item">
                <input type="text" onKeyPress={this.handleKeyPress} />
            </div>
        );
    }
}

export default AddItem;