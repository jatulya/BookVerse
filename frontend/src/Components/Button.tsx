import React from "react";

//defining the property type of the buttons
type ButtonProps = {
    click: () => void; //the function mentioned as click = fnctname will in the html of button will be called when btn is clicked
    text: string; //this string is displayed on btn as label
}

//defining the Button component using FC -> functional component
const Button: React.FC<ButtonProps> = ({ click, text}) => {
    return (
        <button onClick={click}>
            {text}
        </button>
)}

export default Button
