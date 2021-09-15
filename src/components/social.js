import React from 'react'
import { SocialIcon } from './icons'

const config = require('./../config.json')
const urls = config.drdavisicecream.urls

const iconStyle = {
	padding: '0 .25em',
    color: config.drdavisicecream.colors.yellow,
    fontSize: '3rem'
}

export const SocialNav = () => {
    return (
        <nav style={{margin: '1rem auto'}}>
            <a href={urls["facebook"]}><SocialIcon iconName="faFacebook" style={iconStyle} /></a>
            <a href={urls["instagram"]}><SocialIcon iconName="faInstagram" style={iconStyle} /></a>
            <a href={urls["twitter"]}><SocialIcon iconName="faTwitter" style={iconStyle} /></a>
        </nav>
    )
}
