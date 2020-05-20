import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />
          <span style={{ paddingLeft: "10px" }}>{title}</span>
          <button
            style={btnStyle}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}
// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

// delete button style
const btnStyle = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
