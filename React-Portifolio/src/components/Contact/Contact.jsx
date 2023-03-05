import React from 'react'
import { Description } from '../Home/Style'
import { Title } from '../Work/Style'
import { ContactBox, ContactInfo, Social } from './Style'

const Contact = () => {
    return (
        <ContactBox id='contact'>
            <Title>Contact</Title>
            <ContactInfo>
                contact@website.com <br/>
                +0 0000 0000
            </ContactInfo>
            <Social>
                <li><a href="mailto:feijo6622@gmail.com" target="_blank">Email</a></li>                
                <li><a href="https://www.linkedin.com/in/gabriel-feijo/" target="_blank">LinkedIn</a></li>                
                <li><a href="https://github.com/GabrielFeijo" target="_blank">GitHub</a></li>                
                <li><a href="https://www.youtube.com/channel/UCji44ichDsw5CsJAROll3Xg" target="_blank">YouTube</a></li>                
                <li><a href="https://www.instagram.com/gabriel.sfeijo/" target="_blank">Instagram</a></li>                
                <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>                
            </Social>

        </ContactBox>

    )
}

export default Contact