import React, {ReactNode} from "react";

type ContainerComponentProps = {
    children: ReactNode|Required<null>,
    extraCSSClasses:String
}

export default class Container extends React.Component<ContainerComponentProps> {
    extraCSSClasses: String;
    children: ReactNode;

    constructor(props:ContainerComponentProps) {
        super(props);
        this.extraCSSClasses = props.extraCSSClasses;
        this.children = props.children;
    }
    render() {
        const minStyle= {minWidth: '5rem', minHeight: '5rem'};
        return (
            <div className={'border ' + this.extraCSSClasses} style={minStyle}>
                {this.children}
            </div>
        );
    }
}