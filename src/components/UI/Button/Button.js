// **---NOTES: Button.js ma matrai CSS Modules(video:101) use gareko cha---**

//----** Video102: Using CSS Module instead of Styled Components---**
// import styled from 'styled-components';
// // import './Button.css';
import React from 'react';
import styles from './Button.module.css'; //styles or classses

// // ---- Video99: Using styled components
// const Button = styled.button`
//   font: inherit;
//   width: 100%;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   /* VIDEO 101: Styled Components & Media Queries */
//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
