import "./App.css";
import React from "react";

import Card from "./components/layout/card";

import MegaApp from "./components/megaApp/megaApp";
import ContadorApp from "./components/contadorApp/ContadorApp";
import Input from "./components/formulario/input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import Condicional from "./components/condicional/CondicionalIf";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Card">
            <Card titulo="#13 - Mega" color="#B9006E">
                <MegaApp qntd={8}></MegaApp>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <ContadorApp numeroInicial={10} passoInicial={1}></ContadorApp>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <Condicional usuario={{ nome: "Fernando" }} />
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);