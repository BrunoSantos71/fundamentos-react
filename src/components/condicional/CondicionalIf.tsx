import { If } from "./If"
export default function Condicional(props: any) {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario.nome}>
                Seja bem vindo {usuario.nome}
            </If>
            <If test={!usuario.nome}>
                Seja bem vindo anonimo
            </If>

        </div>

    )
}
