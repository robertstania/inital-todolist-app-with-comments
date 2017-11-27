/*
----import React from 'react'------
The above is a default import.
Default imports are exported with export default
There can be only a single default export.

----import { Component } from 'react'-----
But this is a member import (named import).
Member imports are exported with export
There can be many member exports.

You can import both by using the syntax below:
*/
import React, { Component } from 'react';
/*This inserts TodoList into the current scope,
containing all the exports from the
module in the file located in /src/TodoList.js.
*/
import TodoList from './TodoList';
/*This inserts App.css into the current scope,
containing all the exports from the
module in the file located in /src/App.css.js.
*/
import './App.css';
/*
ES6 Class Syntax
It gives you the ability to extend from React.Component
instead of accessing React.createClass directly,
which uses less React boilerplate and more JavaScript.
*/
class TodoApp extends Component {
  /*
  The state contains data specific to this component that may change over time.
  The state is user-defined, and it should be a plain JavaScript object
  Sets the intial state for items and and text
  */
  state = {
    /*
    Creates an empty array of items
    */
    items: [],
    /*
    Creates an empty string of items
    */
    text: ''
  }
  /*
  Rendering displays what you see on your screen from the React Component
  */
  render() {
    /*
    Returns the functions listed below
    */
    return (
      /*
      Creates a div container for the Todo List
      */
      <div>
        {/*
          Header Tag
        */}
        <h3>Enter a Task:</h3>
        {/*
          It assigns state.items to the TodoList variable
        */}
        <TodoList items={this.state.items} />
        {/*
          Input Tag:
          The onSubmit eventListener waits for changes to happen in the textbox
          Once it registers something has been submittted into the textbox then it "fires" the onSubmit method
        */}
        <form onSubmit={this.handleSubmit}>
          {/*
            The onChange eventListener waits for changes to happen in the textbox
            Once it registers a change has occurred then it "fires" the onChange method
            this.state.text refers to the local state of text in this particular class component
          */}
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
  /*
  handleChange event method
  */
  handleChange = (e) => {
    /*
    This method performs a shallow merge of the 'text' into
    this.state and re-renders the component.
    The text argument returns an object containing keys to update.
    The event.target property together with the
    element '.value' property to find out which element triggered a specified event
    the event target value is the input on the form
    */
    this.setState({ text: e.target.value });
  }
  /*
  handleSubmit event method
  */
  handleSubmit = (e) => {
    /*
    Prevents page from loading default content
    */
    e.preventDefault();
    /*
    A function's this keyword behaves a little differently in
    JavaScript compared to other languages.
    It also has some differences between strict mode and non-strict mode.

    In most cases, the value of this is determined by how a function is called.
    It can't be set by assignment during execution,
    and it may be different each time the function is called.

    ES5 introduced the bind method to set the value of a
    function's this regardless of how it's called, and
    ES2015 introduced arrow functions which do
    provide their own this binding
    (it remains the this value of the enclosing lexical context).
    */
    if (!this.state.text.length) {

      return;
    }
    /*
    The const newItem declaration creates a constant
    whose scope can be either global or
    local to the block in which it is declared
    */
    const newItem = {
      /*
      The Date.now() method returns the number of milliseconds
      elapsed since 1 January 1970 00:00:00 UTC.
      this.state.text refers to the local state of text in this particular class component
      */
      text: this.state.text,
      id: Date.now()
    };
    /*
    The this.setState method performs a shallow merge of the prevState function into
    this.state and re-renders the component.
    The prevState function arguement returns an object containing keys to update.
    The key are items and text.
    Concat is used to pass newItem into prevState
    */
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}
/*
It's part of the ES6 module system
The export statement is used when creating JavaScript modules to
export functions, objects, or primitive values from the
module so they can be used by other programs with the import statement.
*/
export default TodoApp;
