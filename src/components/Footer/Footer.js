import React from 'react';

const Footer = () => {
  return (
    <div>
      <h3>How useState Works?</h3>
      <p>
        useState is React Hook that allows create state variables in functional
        components. In useState, user can pass the initial state to the function
        and that function returns a variable with the current state value and
        another function to update this value by setting new state.The initial
        value will be assigned only on the initial render. Then renders will be
        happen because of a change of state in the component or a parent
        component, the argument of the useState Hook will be ignored and the
        current value will be retrieved.useState do not return just a variable.
        It returns an array, where the first element is the state variable and
        the second element is a function to update the value of the variable
      </p>

      <h3>Differences between state and props?</h3>
      <p>
        Props are read-only ,immutable.Props does pass data from one component
        to other components as an argument and accessed by the child component
        and make components reusable.Props are external and controlled by
        whatever renders the component.On the otherhand, State is mutable and
        changes can be asynchronous.State takes information about the components
        and cannot be accessed by child components and cannot make components
        reusable.State is internal and controlled by the React Component itself
        and components which is stateless cannot have State.
      </p>
    </div>
  );
};

export default Footer;
