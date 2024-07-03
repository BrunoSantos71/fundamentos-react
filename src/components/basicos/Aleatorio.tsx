export default function Aleatorio(props: any) {

    return (
        <div>
            Numero Aleatorio entre: {props.min} e {props.max} é: {randomNumber(props)}
        </div>
    )
}

function randomNumber(propos: any) {
    return Math.floor(Math.random() * (propos.max - propos.min) + propos.min);
}