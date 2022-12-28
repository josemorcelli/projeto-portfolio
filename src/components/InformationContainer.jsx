import React from 'react';
import '../styles/components/informationcontainer.sass'
import {
    AiFillPhone, 
    AiOutlineMail, 
    AiFillEnvironment
} from 'react-icons/ai'

const informationContainer = () => {
    return <section id='information'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon' />
        <div>
            <h3>Telefone</h3>
            <p>(11)95490-4581</p>
        </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id='email-icon' />
        <div>
            <h3>E-mail</h3>
            <a href="mailto:josemorcelli1@gmail.com" target="_blank">josemorcelli1@gmail.com</a>

        </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id='pin-icon' />
        <div>
            <h3>Localização</h3>
            <p>São Paulo - SP</p>
        </div>
        </div>
    </section>
}

export default informationContainer