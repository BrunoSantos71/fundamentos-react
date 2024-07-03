
import { Component } from "react";

export interface BotoesProps {
    incrementar: any,
    decrementar: any
}
export interface BotoesState {
    passo: number,
    numero: number
}


export default class Botoes extends Component<BotoesProps, BotoesState> {
    render() {
        return (
            <div>
                <button onClick={this.props.incrementar}>+</button>
                <button onClick={this.props.decrementar}>-</button>
            </div>
        )
    }
}