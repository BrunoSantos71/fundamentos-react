export default function IndiretaFilho(props: any) {
    const gerarIdade = (): number => Math.floor(Math.random() * (20) + 50)
    const gerarNerd = (): boolean => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function (e) {
                    props.quandoClicar("João", gerarIdade(), gerarNerd())
                }

            }>Fornecer informações</button>
        </div>
    )
}