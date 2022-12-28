import React from 'react';
import {
    FaLinkedinIn, 
    FaGithub, 
    FaInstagram 
} from 'react-icons/fa'
import "../styles/components/socialnetworks.sass"

const redesocialNetworks=[
    {name: "linkedin", icon: <FaLinkedinIn/>, url: "https://www.linkedin.com/in/josemorcelli/"},
    {name: "github", icon: <FaGithub/>, url: "https://github.com/josemorcelli"},
    {name: "instagram", icon: <FaInstagram/>, url: "https://www.instagram.com/josemorcelli"},
];

const socialNetworks = () => {
    return <section id="social-networks">
        {redesocialNetworks.map((network) => (
            <a 
            href={network.url}
            target="_blank"
            className='social-btn' 
            id={network.name} 
            key={network.name}>
                {network.icon}
            </a>
            
        ))}
    </section>
    
}

export default socialNetworks;