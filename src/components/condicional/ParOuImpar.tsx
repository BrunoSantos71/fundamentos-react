export default function ParOuImpar(props: any) {
    const isPar = props.numero % 2 === 0
    return (
        <div>
            {props.numero} é

            {
                isPar ?
                    <span> Par</span> :
                    <span> Impar</span>
            }
        </div>
    )
}