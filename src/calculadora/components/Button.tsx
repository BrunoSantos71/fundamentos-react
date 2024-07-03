import "./botao.css"

interface ButtonProps {

    click: any
    botao: string
    triple?: boolean
    double?: boolean
    operation?: boolean
}

export default function Button(props: ButtonProps) {
    let classes = 'button '
    classes += props.triple ? 'triple' : ''
    classes += props.double ? 'double' : ''
    classes += props.operation ? 'operation' : ''
    return (
        <div>
            <button
                className={classes}
                onClick={e => props.click && props.click(props.botao)}>
                {props.botao}

            </button>
        </div>

    )
}