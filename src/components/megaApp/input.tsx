import { Component } from "react";

export interface InputProps {
    qntd: number,
    qntdNova: any
}


export default class Input extends Component<InputProps> {

    render() {
        return (
            <div>
                <label htmlFor="input">Qntd Números:</label>
                <input id="input"
                    type="number"
                    min="1"
                    max="60"
                    value={this.props.qntd}
                    onChange={e => this.props.qntdNova(+e.target.value)} />
            </div>
        )
    }
}