/*
This is a default import.
Default imports are exported with export default.
Note: There can be only a single default export.
*/
import React from 'react';

/*
ES6 Class Syntax
It gives you the ability to extend from React.Component
instead of accessing React.createClass directly,
which uses less React boilerplate and more JavaScript.
*/
class TodoList extends React.Component {
  /*
  Rendering displays what you see on your screen from the React Component
  */
  render() {
    /*
    Returns everthing listed below
    */
    return (
      /*
      ul tags used for unordered list

      The “map” method is used to traverse and display a list of
      similar objects representing a component in ReactJS
      li tags are used to define a list of items

      The list is organized by the:
      key={item.id}>{item.text}

      A “key” is a special string attribute you need to
      include when creating lists of elements.

      Keys help React identify which items have
      changed, are added, or are removed.

      The best way to pick a key is to use a string that
      uniquely identifies a list item among its siblings.

      When you don’t have stable IDs for rendered items,
      you may use the item index as a key as a last resort

      A good rule of thumb is that elements inside the map() call need keys.
      */
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

/*
It's part of the ES6 module system
The export statement is used when creating JavaScript modules to
export functions, objects, or primitive values from the
module so they can be used by other programs with the import statement.
*/
export default TodoList;
