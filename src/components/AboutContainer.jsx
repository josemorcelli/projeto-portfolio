import React from 'react';
import '../styles/components/aboutcontainer.sass'

const aboutContainer = () => {
    return <section className='about-container'>
        <h2>Sobre</h2>
        <p>
        Olá sou José Augusto sou desenvolvedor Full-Stack em formação pela Labenu. 
        Realizei projetos individuais e em grupo em React, JavaScript, HTML, CSS e TypeScript até o momento. 
        O curso conta com oficinas semanais onde desenvolvemos soft skills como metodologias ágeis, 
        feedbacks, comunicação não violenta entre outros assuntos que contribuem para atuar no mercado 
        de trabalho.
        </p>
        <p>
        Estou em mudança de carreira procurando sempre minha evolução, como sempre gostei de tecnologia 
        decidi aprender mais sobre desenvolvimento Web, após seis meses de estudo hoje sou Desenvolvedor 
        Front-End com experiência em pouco tempo, com projeto como Pokédex onde consumimos dados do PokeAPI
        e precisamos construir um layout responsivo para ser visualizado no navegador do desktop e do celular. 
        Também projeto como Astromatch (que seria um clone do amado aplicativo Tinder) em que era necessário 
        gerar funcionalidades similares as do real fazendo o uso de API disponibilizada pela Labenu. 
        Todos estes projetos dentre outros encontram se no meu perfil do Github.
        </p>
    </section>
}

export default aboutContainer