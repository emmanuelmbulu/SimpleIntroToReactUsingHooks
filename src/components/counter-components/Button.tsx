import React from "react";

type ButtonProps = {
    handleClik: () => void;
    text: string;
    bootstrapClass: string;
}

export default function Button(props: ButtonProps) {

    const onClick = props.handleClik;
    const bootstrapClass:String = props.bootstrapClass;
    const text:String = props.text;

    return (
        <button onClick={onClick} className={'btn ' + bootstrapClass}>{text}</button>
    );
}