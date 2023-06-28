import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
// import './CourseInput.css';
import styled from 'styled-components';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    color: ${(props) => (props.invalid ? 'red' : 'black')};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
    background-color: ${(props) => (props.invalid ? '#ffd7d7' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

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
      <FormControl invalid={!isValid}>
        {/* <div className={`form-control ${!isValid ? 'invalid' : ' '}`}> ---video99 */}
        {/* <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label> ---video98 */}
        <label>Course Goal</label>
        {/* <input
          style={{
            borderColor: !isValid ? 'red' : 'blue',
            background: !isValid ? 'salmon' : 'transparent',
          }}
          type="text"
          onChange={goalInputChangeHandler}
        /> ---video99*/}
        <input type='text' onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
