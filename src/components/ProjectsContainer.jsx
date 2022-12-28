import React from 'react';
import '../styles/components/projectscontainer.sass'

const projectsContainer = () => {
    return <section className='projects-container'>
        <h2>Projetos</h2>

        <h3>LANDING PAGE TEMPLATE</h3>
        <h4>JUNHO/2022</h4>

        <p>
        Meu primeiro projeto em grupo, uma landing
        page com o intuito de simular o site de uma
        instituição financeira.Tivemos como base
        instituições que já estão consolidadas no
        mercado, por exemplo, Banco Inter, Nubank
        e c6bank.
        </p>

        <a href='https://github.com/josemorcelli/landing-page' target="_blank" className='btn'>
            Ver Projeto
        </a>

        <h3>POKEDÉX API</h3>
        <h4>AGOSTO/2022</h4>

        <p>
        Projeto desenvolvido em React JS com o
        consumo de uma API REST (PokeAPI),
        simulando uma Pokédex, com
        funcionalidades como capturar o pokémon,
        remover, ver detalhes.
        </p>

        <a href='https://github.com/josemorcelli/Poked-x' target="_blank" className='btn'>
            Ver Projeto
        </a>

        <h3>LABEBANK - SISTEMA BANCÁRIO</h3>
        <h4>NOVEMBRO/2022</h4>

        <p>
        O LabeBank é um projeto de Sistema Bancário 
        onde é possivel se criar uma conta com dados 
        do cliente, nome, data de nascimento e CPF. 
        Projeto em grupo desenvolvido totalmente em TypeScript.
        </p>

        <a href='https://github.com/future4code/Barros-labebank3' target="_blank" className='btn'>
            Ver Projeto
        </a>
        
    </section>
}

export default projectsContainer