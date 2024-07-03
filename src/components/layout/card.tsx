import "./Card.css"

type CardPropos = {
    titulo:string
    color: string
    //children: string
}
export default function Card(props: any) {
    const style = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    console.log(props)

    return (
        <div className="Card" style={style}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}