import React, {ReactNode} from "react";

type ContainerComponentProps = {
    children: ReactNode|Required<null>,
    extraCSSClasses:string,
    id:string
}

export default class Container extends React.Component<ContainerComponentProps> {
    extraCSSClasses: string;
    children: ReactNode;
    id: string|any|null;

    constructor(props:ContainerComponentProps) {
        super(props);
        this.extraCSSClasses = props.extraCSSClasses;
        this.children = props.children;
        this.id = props.id ? props.id : '';
    }
    render() {
        const minStyle= {minWidth: '5rem', minHeight: '5rem'};
        return (
            <div id={this.id} className={'border ' + this.extraCSSClasses} style={minStyle}>
                {this.children}
            </div>
        );
    }
}