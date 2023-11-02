import React from "react";
import ReactDOM from "react-dom/client";

const Element = () => <span>React Element</span>;
const title = (
  <h1 style={{ color: "teal" }}>
    {Element()}
    {/* This is a different way of calling a component 
    inside the curly baces where we will execute the javascriptcode. Since by the end of the day Element is a javascript function
    If you don't want to call it like a Javascript function then we can use it like this <Element /> or <Element></Element /> */}
    {/* <App1 /> */}
    This is the normal javascript variable
  </h1>
);
const App1 = () => (
  <div>
    {title}
    <span>Hey Haritha! Welcome from App1 🧚 🚀hjdhfkhdj</span>
    <div>testing</div>
  </div>
);

//If I try to access the App1 inside the title then an error will be thown stating that
// "Cannot access 'App1' before initialization". This is because APP1 is constant which cannot be used before initialization.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App1 />);
