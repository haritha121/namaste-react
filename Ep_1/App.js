const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to Namaste React Series!"
);
console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // This render methos will convert the object to h1 tag and then display the data.

/*This will print the object.All the data will be inside the props attribute
This will not print the h1 tag. It gived us the h1 element which is nothing but a javascript object. iT will have props(children(data needs to be passed for H1 tag) +attributes(stylings etc))
output will be like this: {
$$typeof: Symbol(react.element)
key: null
props: 
children: "Welcome to Namaste React Series!"
id: "heading"
ref: null
type: "h1"
_owner: null
_store: {validated: false}
_self: null
_source: null
}
*/

//How do you create a nested elements like below:
/*
<div id="parent" className="first">
  <div id="firstChild" className="second">
  <h1></h1>
  </div>
</div>
*/
const headingElement = React.createElement("h1", {}, "Testing Nested Elements");
const childElement = React.createElement(
  "div",
  {
    id: "firstChild",
    className: "second",
  },
  headingElement
);
const parentElement = React.createElement(
  "div",
  {
    id: "parent",
    className: "first",
  },
  childElement
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parentElement);

//If we have multiple children then we shd pass or create an Array of Elements.
/*
const parentElement = React.createElement(
  "div",
  {s
    id: "parent",
    className: "first",
  },
  [childElement,secondChildElement]
);
*/
/*
<div id="parent">
  <div id="firstChild">
    <h1 id="heading1">
      Hey I'm H1 tag!
    </h1>
    <h2 id="heading1">
    Hlo I'm H2tag!
    </h2>
  </div>
  <div id="secondChild">
    <h3 id="heading3">
      Hola, I'm H3 tag!
    </h3>
    <h4 id="heading4">
      Namaste, I'm H4 tag!
    </h4>
  </div>
</div>
*/

//Create the above mentioned jsx
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "firstChild" }, [
    React.createElement("h1", { id: "heading1" }, "Hey I'm H1 tag!"),
    React.createElement("h2", { id: "heading2" }, "Hlo I'm H2tag!"),
  ]),
  React.createElement("div", { id: "secondChild" }, [
    React.createElement("h3", { id: "heading3" }, "Hola, I'm H3 tag!"),
    React.createElement("h4", { id: "heading4" }, "Namaste, I'm H4 tag!"),
  ]),
]);
const rootELement = ReactDOM.createRoot(document.getElementById("root"));
rootELement.render(parent);
/*
If there is data already present inside the root elemnt and if we pass the parentElement to that 
root Element what will happen?
a)Will it print both the rootElement and the parentElement
b)The data in root element will be overwritten by the data in the parentElement
c)The data in the parentElement will not be displayed. The root element data only will be displayed.

Sol) The existing data in the root will be displayed on the refresh of the page.
Then the data in the parent element will replace the data in the root element.
the existing data is replaced by the parent Element data.
*/
