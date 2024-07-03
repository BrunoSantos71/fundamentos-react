import { Component } from "react";
import "./mega.css"

export interface GeradorProps {
    qntd: number
}

export interface GeradorState {
    qntd: number
    numeros: number[]
}

let numeros: number[]
let numerosSaida: string

export default class Gerador extends Component<GeradorProps, GeradorState> {

    gerador(qntd: number) {
        let arr: number[] = []

        for (let index = 0; arr.length < qntd; index++) {
            const nr = Math.floor(Math.random() * (61 - 1) + 1);

            let existe = arr.find(a => a === nr)

            if (existe) {
                continue
            }
            else {
                arr.push(nr)
            }

        }

        arr.sort(function (a, b) { return a - b })
        return arr
    }

    iniciar = () => {
        if (this.props.qntd <= 60) {
            this.setState({
                qntd: this.props.qntd
            })

            numeros = this.gerador(this.props.qntd)

            this.setState({
                numeros: numeros
            })


            numerosSaida = numeros.join('-')
        }
        else {
            numerosSaida = "erro"
        }

        console.log(this.gerador(6))

    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.iniciar}>Gerar</button>
                </div>
                <div className="Numeros">
                    {numerosSaida}
                </div>
            </div>

        )
    }
}