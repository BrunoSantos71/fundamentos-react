import { produtos } from "../../data/produtos"
import "./TabelaProduto.css"

export default function Produtos(props: any) {

    const listaProdutos = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <th scope="row">{produto.id}</th>
                <td>{produto.nome}</td>
                <td><strong> R$ {produto.preco}</strong></td>
            </tr>
        )
    })

    return (
        <div>
            <table className="center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos}
                </tbody>
            </table>
        </div>
    )
}