import { Component } from "react";
import Input from "./input";
import Gerador from "./gerador";
import "./mega.css"

export interface MegaAppProps {
    qntd: number
}

export interface MegaAppState {
    qntd: number
}

export default class MegaApp extends Component<MegaAppProps, MegaAppState> {

    constructor(props: MegaAppProps) {

        super(props)

        this.state = {
            qntd: props.qntd || 6,
        };
    }

    novaQuantidade = (novaQntd: number) => {
        this.setState({
            qntd: novaQntd
        })
    }

    render() {
        return (
            <div className="Mega">
                <h2>Gerador de números megasena</h2>
                <Input qntd={this.state.qntd} qntdNova={this.novaQuantidade}></Input>
                <Gerador qntd={this.state.qntd}></Gerador>
            </div>
        )
    }
}