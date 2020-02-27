import { Component, createElement } from "react";
import { TimeText } from "./components/TimeText";

export class preview extends Component {
    render() {
        return (
            <div ref={this.parentInline}>
                <TimeText {...this.transformProps(this.props)}></TimeText>
            </div>
        );
    }

    parentInline(node) {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement && node.parentElement.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }

    transformProps(props) {
        return {
            className: props.class,
            style: props.styleObject,
            defaultValue: props.time.value ? props.time.value : "00:00",
            value: props.time.value
        };
    }
}

export function getPreviewCss() {
    return require("./ui/Timer.css");
}
