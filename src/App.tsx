import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container";
import Color from "./components/color-component/Color";
import BasicCounter from "./components/counter-components/BasicCounter";
import CursorComponent from "./components/cursor-component/CursorComponent";

function App() {
  return (
      <Container extraCSSClasses="row">
        <Container extraCSSClasses="col-md-6">
            <Color />
        </Container>
        <Container extraCSSClasses="col-md-6">
            <BasicCounter />
        </Container>
        <Container extraCSSClasses="col-md-6">
            <CursorComponent />
        </Container>
      </Container>
  );
}

export default App;
