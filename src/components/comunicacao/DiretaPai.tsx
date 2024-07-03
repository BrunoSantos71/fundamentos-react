import DiretaFilho from "./DiretaFilho"

export default function DiretaPai(props: any) {

    return (
        <div>
            <DiretaFilho nome="filho 1" idade={20} nerd={true} />
            <DiretaFilho nome="filho 2" idade={17} nerd={false} />
        </div>
    )
}