import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  // To check wether user submitted & entered something valid or not
  const [isValid, setIsValid] = useState('true');

  const goalInputChangeHandler = (event) => {
    //keystroke press bhaye pachi ,empty case ko color/effects lai reset garna
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // To check wether the input field is empty or not,TRIM() removes whitespace before & after text
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? 'red' : 'blue',
            background: !isValid ? 'salmon' : 'transparent',
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
