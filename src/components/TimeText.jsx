import { Component, createElement } from "react";
import classNames from "classnames";

export class TimeText extends Component {
    setValue() {
        if (this.props.value) {
            const min = Math.floor(this.props.value / 60000);
            const sec = Math.floor((this.props.value - min * 60000) / 1000);
            return min + ":" + (sec < 10 ? "0" + sec : sec);
        } else return this.props.defaultValue;
    }

    render() {
        const value = this.setValue();
        return (
            <span
                id={this.props.id}
                className={classNames("widget-timer", this.props.className)}
                style={this.props.style}
            >
                {value}
            </span>
        );
    }
}
