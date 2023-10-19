import React from "react";
import ReactDOM, {Root} from "react-dom/client";

type ColorObject = {
    name:String, css:String
}

export default class Color extends React.Component {
    private data:Array<ColorObject> = [
        {
            name: "blue",
            css: "bg-primary bg-gradient"
        },
        {
            name: "gray",
            css: "bg-secondary bg-gradient"
        },
        {
            name: "green",
            css: "bg-success bg-gradient"
        },
        {
            name: "red",
            css: "bg-danger bg-gradient"
        },
        {
            name: "yellow",
            css: "bg-warning bg-gradient"
        },
        {
            name: "sky blue",
            css: "bg-info bg-gradient"
        },
        {
            name: "black",
            css: "bg-black bg-gradient"
        },
        {
            name: "white",
            css: "bg-white"
        }
    ];
    state:{ index:number };
    private timerId:NodeJS.Timer|null = null;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {index: 0};
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            const currentIndex = this.state.index;

            if(currentIndex === this.data.length - 1) {
                this.setState({index: 0});
            } else this.setState({index: currentIndex + 1})
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(parseInt(this.timerId + ""));
    }

    handleClick = () => {
        const rootElement: Root = ReactDOM.createRoot(document.getElementById('color-component') as HTMLElement);
        rootElement.unmount();
    }

    render() {
        const color = this.data[this.state.index];
        const minStyle= {minWidth: '5rem', minHeight: '5rem'};

        return (
            <div className="border p-5">
                <h3>The current color is <mark>{color.name}</mark>.</h3>
                <div className={'border border-3 p-2 mb-3 ' + color.css} style={minStyle} />
                <button onClick={this.handleClick} className="btn btn-outline-danger">Remove this component</button>
            </div>
        );
    }

}

