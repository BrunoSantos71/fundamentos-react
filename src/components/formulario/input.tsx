import { useState } from "react"
import "./input.css"

export default function Input() {
    const [valor, setValor] = useState('incial')
    const [valor2] = useState('')
    function quandoMudar(e: any) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }

            }></div>
            <input value={valor} onChange={quandoMudar} />

            <input value={valor2} readOnly />

            <input value={undefined} />
        </div>
    )
}