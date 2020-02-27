import "./ui/Timer.css";
import { Component, createElement } from "react";
import { TimeText } from "./components/TimeText";
import { hot } from "react-hot-loader/root";

class Timer extends Component {
    timer = null;

    constructor(props) {
        super(props);
        this.state = {
            time: null
        };
    }
    //called once after first render (post create)
    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    startTimer() {
        this.timer = setInterval(() => {
            const value = this.props.time.value ? this.props.time.value.getTime() - Date.now() : null;
            if (value < 1000) this.execAction(); //execute action if time is 00:00 - round down to 0 sec
            this.setState({
                time: value
            });
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <TimeText
                id={this.props.id}
                className={this.props.class}
                defaultValue=""
                style={this.props.style}
                value={this.state.time}
            />
        );
    }

    execAction() {
        if (this.props.onTriggerAction && this.props.onTriggerAction.canExecute) {
            this.stopTimer();
            this.props.onTriggerAction.execute();
        }
    }
}

export default hot(Timer);
