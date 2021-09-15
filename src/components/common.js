import React from 'react'
import { SocialNav } from './social'
import {
    StyledAnchor,
    StyledInfo,
    StyledLinkButton,
    StyledHero,
    StyledFooter } from './Styles'

const config = require('./../config.json')
const STATIC_URL = config.drdavisicecream.static_url
const COLORS = config.drdavisicecream.colors

export const InfoSection = (props) => {
    return (
        <StyledInfo
            color={props.bgColor}
            fontColor={props.fontColor}
            textAlign={props.textAlign}
            marginTop={props.marginTop}
            paddingTop={props.paddingTop}
            paddingBottom={props.paddingBottom}
            paddingLeft={props.paddingLeft}
            paddingRight={props.paddingRight}>{props.children}</StyledInfo>
    )
}

export const Title = (props) => {
    return (
        <h1>{props.children}</h1>
    )
}

export const LinkButton = (props) => {
    const goTo = () => {
        window.location.href=props.url
    }
    return (
        <StyledLinkButton buttonColor={props.color} fontColor={props.fontColor}>
            <button onClick={goTo} type="button">{props.children}</button>
        </StyledLinkButton>
    )
}

export const HeroHeader = () => {
    return (
        <StyledHero>
            <img src={STATIC_URL + "/img/logos/drdavisicecream_second_logo.gif"}  alt="Doc's ice cream logo" />
            <h5>Making and serving our own ice cream for over 80 years!</h5>
            <h1>Home of the Doc's Special</h1>
        </StyledHero>
    )
}

export const Anchor = (props) => {
    return (
        <StyledAnchor>
            <a href={props.target}>{props.text}</a>
        </StyledAnchor>
    )
}

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <StyledFooter fontColor="white" backgroundColor="transparent">
            <footer>
                <h4>Family Owned and Operated</h4>
                <img src="https://static.dev.beantownpub.com/img/logos/drdavisicecream_logo.png" alt="Doc's ice cream logo" />
                <h3>67 Hollis St. Pepperell MA</h3>
                <h2>Call: 978-433-6315</h2>
                <h2>Stay Connected</h2>
                <SocialNav/>
                <h2>{'© ' + year} Dr. Davis Ice Cream</h2>
            </footer>
        </StyledFooter>
    )
}
