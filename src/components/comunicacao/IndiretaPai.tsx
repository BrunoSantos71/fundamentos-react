import React, { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

export default function IndiretaPai(props: any) {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    

    //nome idade pai
    function fornecedorInformacoes(nome: string,
        idade: number,
        nerd: boolean) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

        console.log(nome, idade, nerd)
    }

    return (
        <div>
            <div>Pai</div>
            <span>{nome} </span>
            <span>{idade} </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'}  </span>
            <IndiretaFilho quandoClicar={fornecedorInformacoes} />
        </div>
    )
}