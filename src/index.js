import React from "react" ;
import ReactDom from "react-dom" ;



// const element = <div className="my-text">Hello React !!!</div>;
const element = React.createElement("div" , {className : "mu-text"} , "Hello React");
ReactDom.render(element , document.getElementById("root"));