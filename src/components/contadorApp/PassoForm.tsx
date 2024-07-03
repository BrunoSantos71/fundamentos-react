import { Component } from "react";

export interface PassoFormProps {
    passo: number,
    setPasso: any
}


export default class PassoForm extends Component<PassoFormProps> {

    render() {
        return (
            <div>
                <label htmlFor="passoInput">Passo:</label>
                <input id="passoInput"
                    type="text"
                    value={this.props.passo}
                    onChange={e => this.props.setPasso(+e.target.value)} />
            </div>
        )
    }
}