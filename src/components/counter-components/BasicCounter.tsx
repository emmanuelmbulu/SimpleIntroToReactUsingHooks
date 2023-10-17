import {ReactElement, useState} from "react";
import Button from "./Button";

export default function BasicCounter() {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);

    return (
        <div className="row">
            <div className="col-8 offset-2">
                <div className="row">
                    <div className="col-6 offset-3 p-3">
                        <h1 className="display-1">{counter}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 p-2">
                        <Button handleClik={increase}
                                text="Increase"
                                bootstrapClass="btn-primary"/>
                    </div>
                    <div className="col-6 p-2">
                        <Button handleClik={decrease}
                                text="Decrease"
                                bootstrapClass="btn-danger"/>
                    </div>
                </div>
            </div>
        </div>
    );
}