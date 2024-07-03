import { Component } from "react";
import './app.css'

import Button from "./components/Button";
import Display from "./components/Display";

interface CalculatorProps {

}

interface CalculatorState {

    displayValue: string,
    clearDisplay: boolean,
    operation: string,
    values: number[],
    current: number
}

const inicialState: CalculatorState = {
    displayValue: "0",
    clearDisplay: false,
    operation: "",
    values: [0, 0],
    current: 0
}


export default class Calculator extends Component<CalculatorProps, CalculatorState> {

    state = { ...inicialState }


    constructor(props: CalculatorProps) {
        super(props)

        this.cleanMemory = this.cleanMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    cleanMemory() {
        console.log("limpar")
        this.setState({ ...inicialState })
    }

    setOperation(operation: string) {
        console.log(operation)
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === "="
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            try {
                switch (currentOperation) {
                    case "+":
                        values[0] = (values[0] + values[1])
                        break
                    case '*':
                        values[0] = (values[0] * values[1])
                        break
                    case '-':
                        values[0] = (values[0] - values[1])
                        break
                    case "/":
                        values[0] = (values[0] / values[1])
                        break
                    default:
                        values[0] = values[0]
                }
                //values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0].toString(),
                operation: equals ? "" : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(botao: any) {
        console.log(this.props)
        if (botao === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + botao

        this.setState({ displayValue, clearDisplay: false })

        if (botao !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })

            console.log(values)
        }
    }

    render() {
        return (
            <div className="calculator">

                <Display value={this.state.displayValue} />
                <Button botao="AC" click={this.cleanMemory} triple />

                <Button botao="7" click={this.addDigit} />
                <Button botao="8" click={this.addDigit} />
                <Button botao="/" click={this.setOperation} operation />
                <Button botao="9" click={this.addDigit} />

                <Button botao="4" click={this.addDigit} />
                <Button botao="5" click={this.addDigit} />
                <Button botao="*" click={this.setOperation} operation />
                <Button botao="6" click={this.addDigit} />

                <Button botao="1" click={this.addDigit} />
                <Button botao="2" click={this.addDigit} />
                <Button botao="-" click={this.setOperation} operation />
                <Button botao="3" click={this.addDigit} />

                <Button botao="0" click={this.addDigit} double />
                <Button botao="." click={this.addDigit} />
                <Button botao="+" click={this.setOperation} operation />
                <Button botao="=" click={this.setOperation} operation />
            </div>
        )
    }
}