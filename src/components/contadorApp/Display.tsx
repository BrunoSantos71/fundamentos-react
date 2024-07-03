import { Component } from "react";

export interface DisplayProps {
    numero: number,
}
export interface DisplayState {
    numero: number,
}


export default class Display extends Component<DisplayProps, DisplayState> {

    constructor(props: DisplayProps) {

        super(props)

        this.state = {
            numero: props.numero || 1
        };
    }

    render() {
        return (
            <p>valor {this.props.numero}</p>
        )
    }
}