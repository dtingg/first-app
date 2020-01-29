import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Numbers from "./components/numbers";
// import {Route, BroswerRouter} from "react-router-dom";
import styled from "styled-components";


// function OurText(){
//   return <p>This is our text</p>
// }
function createAlert(){
  alert("hello. You clicked me");
}

function ShowMessage(props){
  if (props.toShow){
    return <h2>My message</h2>
  } else {
    return <h2>Forbidden</h2>
  }
  
}

const Paragraph = styled.p`
font-size: 2em;
color: green;`
;

function App() {
  return (
    <div className="App">
      {/* <Header info="this is my message 2" myNumber="6"/> */}
      {/* <Header info="this is my message 5" myNumber="8"/> */}
      <Numbers/>


      {/* <p>main content</p>
      <Paragraph>New styled</Paragraph>
      <Footer trademark="page by Dianna" myalert={createAlert}/> */}
      {/* <ShowMessage toShow={false}/> */}
    </div>
  );

}

export default App;
