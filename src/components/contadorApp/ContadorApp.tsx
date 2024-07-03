import React, { Component } from "react";
import "./ContadorApp.css"
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

export interface ContadorAppProps {
    numeroInicial: number,
    passoInicial: number
}

export interface ContadorAppState {
    numero: number,
    passo: number
}

export default class ContadorApp extends Component<ContadorAppProps, ContadorAppState> {

    constructor(props: ContadorAppProps) {

        super(props)

        this.state = {
            numero: props.numeroInicial || 0,
            passo: props.passoInicial || 5
        };
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso: number) => {
        this.setState({
            passo: novoPasso
        })
    }


    render() {
        return (
            <div className="Contador">
                <h2>ContadorApp</h2>

                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes incrementar={this.inc} decrementar={this.dec}></Botoes>
            </div>
        )
    }
}