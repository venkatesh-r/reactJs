import React from "react";

const ButtonHoc = (Component) => {
  return (props) => {
    const style = { padding: "5px", margin: "10px", border: "solid 1px #000" };
    return <Component style={style} {...props} />;
  };
};

export const ContactForm = (Component) => {
  return (props) => {
    <h4>Hello! From Hoc</h4>;
    return <Component />;
  };
};

export default ButtonHoc;
