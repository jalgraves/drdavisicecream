import React from 'react'
import { SocialNav } from './social.js'
import { ContentSection } from "@jalgraves/react-components-library"
import {
  StyledAnchor,
  StyledLinkButton,
  StyledHero,
  StyledFooter } from './styles.js'
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

export const Footer = () => {
  const year = new Date().getFullYear()
  const gitHash = process.env.GIT_HASH
  const version = process.env.VERSION
  return (
    <ContentSection
      aria-details="footer"
      backgroundColor="transparent"
      borderRadius="4px"
      display="flex"
      flexFlow="column wrap"
      fontFamily={FONTS.footer}
      h1Color={COLORS.white}
      h1FontFamily={FONTS.footer}
      h1FontSize="1.5rem"
      h1FontWeight="900"
      h1LineHeight="150%"
      h1Margin="auto"
      h1Padding=".5rem"
      h1LetterSpacing=".3rem"
      h1TextTransform="uppercase"
      h1TextShadow="rgb(0, 0, 0) 2px 2px 6px;"
      h2Color={COLORS.white}
      h2FontFamily={FONTS.content}
      h2FontSize="1.5rem"
      h2FontWeight="600"
      h2LetterSpacing=".3rem"
      h2LineHeight="150%"
      h2TextShadow="rgb(0, 0, 0) 2px 2px 3px;"
      h2TextTransform="uppercase"
      h2Margin="auto"
      h2Padding=".5rem"
      h3Padding="1rem"
      h3Margin="auto"
      h3Color="transparent"
      margin="1rem auto 1rem auto"
      maxWidth="80vw"
      outline={`.2rem solid ${COLORS.yellow}`}
      padding="2rem"
      textAlign="center"
      width="100vw"
    >
      <footer>
        <h1>Family Owned and Operated</h1>
        <img src="https://static.prod.beantownpub.com/img/logos/drdavisicecream_logo.png" alt="Dr. Davis ice cream logo" />
        <h2>67 Hollis St. Pepperell MA</h2>
        <h2>Call: 978-433-6315</h2>
        <h2>Stay Connected</h2>
        <SocialNav/>
        <h2>{'© ' + year} Dr. Davis Ice Cream</h2>
        <h3>Commit: {gitHash} Version: {version}</h3>
      </footer>
    </ContentSection>
  )
}

export const FooterOld = () => {
  const year = new Date().getFullYear()
  return (
    <StyledFooter fontColor="white" backgroundColor="transparent">
      <footer>
        <h4>Family Owned and Operated</h4>
        <img src="https://static.prod.beantownpub.com/img/logos/drdavisicecream_logo.png" alt="Doc's ice cream logo" />
        <h3>67 Hollis St. Pepperell MA</h3>
        <h2>Call: 978-433-6315</h2>
        <h2>Stay Connected</h2>
        <SocialNav/>
        <h2>{'© ' + year} Dr. Davis Ice Cream</h2>
      </footer>
    </StyledFooter>
  )
}
