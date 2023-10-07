import React from 'react'
import {
  StyledAnchor,
  StyledLinkButton,
  StyledHero } from './styles.js'
import { config } from '../../utils/main.js'
const STATIC_URL = config.static_url
const FONTS = config.fonts
const COLORS = config.colors

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

export const HeroHeader = (props) => {
  return (
    <StyledHero borderBottom={props.borderBottom}>
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
