import alunos from "../../data/alunos"

export default function Alunos(props: any) {

    const lista = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id} - {aluno.nome} - {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {lista}
            </ul>
        </div>
    )
}