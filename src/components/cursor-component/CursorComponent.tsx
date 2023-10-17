import Button from "../counter-components/Button";
import React, {useRef} from "react";

export default function CursorComponent() {
    const input = useRef<HTMLInputElement|null>(null);

    const handleClick = () => {
        if(input.current) input.current.focus();
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-8 offset-2 p-3">
                        <div className="input-group mb-3">
                            <Button handleClik={handleClick} text="Click me" bootstrapClass="btn-success" />
                            <input ref={input} type="text" className="form-control"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}