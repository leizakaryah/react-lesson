import React from 'react';
import ReactDom from 'react-dom';

// function HelloWorld () {
//   var isHello = true;
//   return (
//   <span>{isHello ? 'Hello' : 'not Hello' }</span>
//   );
// }

// function HelloWorld () {
//   var isHello = false;
//   return(
//     <span>
//       {isHello && 'Hello'}
//       {!isHello && 'Goodbye'}
//     </span>
//   );
// }

// function HelloWorld () {
//   return (
//     <div>
//       <Hello/>
//     </div>
//   );
// }

// function Hello() {
//   const name = 'World!';
//   return (
//     <span>Hello {name}</span>
//   );
// }

// function World() {
//   return(
//     <span>World</span>
//   );
// }

// function Lei() {
//   const fName = "Lei";
//   const lName = "Canlas";

//   return(
//     <Person age = {20}
//         name = {fName + ' ' + lName}/>
//   );
// }

// const Person = props => <h1>{props.name + " " + props.age}</h1>

// function Hello(props) {
//   return(
//     <span> Hello {props.name}</span>
//   );
// }

// const Hello = ({name}) => (
//   <span> Hello, {name}</span>
// );

// const Hello = ({fname, lname}) => (
//   <span> Hello, {fname} {lname}</span>
// );

const Hello = (props) => {
  const {name} = props;
  return(
    <span>Hello, {name}</span>
  )
}




ReactDom.render(<Hello name="Lei"/>, document.querySelector('#root'));
