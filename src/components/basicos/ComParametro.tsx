export default function ComParametro(props: any) {
    //processamento do componente
    const status = props.numero >= 7 ? 'Aprovado' : 'Reprovado'

    console.log(props)

    //renderização do componente
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <h3>{props.aluno}</h3>
            <h3>{props.numero} - {status}</h3>
        </div>
    )
}