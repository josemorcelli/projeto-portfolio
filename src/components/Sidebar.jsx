import React from 'react';
import imagem from '../img/Eu.jpg'
import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

const sidebar = () => {
    return <aside id='sidebar'>
       <img src={imagem} alt="José Morcelli"/> 
        <p className='title'>Desenvolvedor Full-Stack</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href='https://drive.google.com/file/d/1Tr98P5D8-b4ActwLO--rjXyFqkTkT-8Y/view?usp=sharing' target="_blank" className='btn'>
            Download Currículo</a>
        <a href='http://my-contatos.surge.sh/' target="_blank" className='btn'>
            Meus Contatos</a>
    </aside>
    
}

export default sidebar