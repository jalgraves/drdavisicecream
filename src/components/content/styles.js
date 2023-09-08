import styled from 'styled-components'
import { config } from '../../utils/main.js'

const COLORS = config.colors
const FONTS = config.fonts

export const StyledInfo = styled.div`
  margin-top: ${props => props.marginTop || "auto"};
  margin-bottom: ${props => props.marginBottom || "auto"};
  margin-left: ${props => props.marginLeft || "auto"};
  margin-right: ${props => props.marginRight || "auto"};
  padding-top: ${props => props.paddingTop || "2rem"};
  padding-bottom: ${props => props.paddingBottom || "2rem"};
  padding-left: ${props => props.paddingLeft || "4rem"};
  padding-right: ${props => props.paddingRight || "1rem"};
  background: ${COLORS.yellow};
  background-color: ${props => props.color || COLORS.yellow};
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
  font-family: ${FONTS.button};
  letter-spacing: .12rem;
  text-transform: uppercase;
  color: ${props => props.fontColor || COLORS.black};
  line-height: 170%;
  h1 {
    padding: .5rem 0;
    font-size: 3em;
    font-family: ${FONTS.button};
    font-weight: 900;
    line-height: 170%;
  }
  h2 {
    padding: .5rem 0;
    max-width: 80vw;
    font-family: ${FONTS.content};
    font-size: 2em;
    line-height: 170%;
    text-align: ${props => props.textAlign || "initial"};
    span {
      color: ${COLORS.red};
    }
  }
  h3 {
    padding: 1rem 0;
    max-width: 80vw;
    font-family: ${FONTS.headline};
    font-size: 2em;
    line-height: 170%;
    letter-spacing: .25rem;
  }
  h4 {
    padding: .5rem 0;
    max-width: 40rem;
    font-family: ${FONTS.content};
    font-size: 1.75rem;
    text-transform: none;
    line-height: 170%;
  }
  h5 {
    padding: .5rem 0;
    max-width: 40rem;
    font-family: ${FONTS.script};
    font-size: 1.75rem;
    letter-spacing: unset;
    text-transform: none;
    line-height: 170%;
  }
  h6 {
    padding: .5rem 0;
    max-width: 40rem;
    font-family: ${FONTS.content};
    font-size: .75rem;
    text-transform: none;
    line-height: 170%;
  }
  a {
    text-decoration: none;
    color: ${COLORS.dodgerBlue};
    font-family: ${FONTS.content};
    text-transform: capitalize;
  }
  a:hover {
  color: ${COLORS.red};
  }
  article {
    font-family: ${FONTS.content};
    font-size: 150%;
    font-weight: 600;
    line-height: 150%;
    padding: 2rem 0 0 0;
    max-width: 80vw;
    text-transform: none;
  }
  p {
    padding: .5rem 0;
    max-width: 50rem;
    color: ${COLORS.white};
    text-transform: none;
    font-family: ${FONTS.content};
    font-size: 1.2rem;
    text-shadow: rgb(0, 0, 0) 2px 2px 6px;
  }
  @media (min-width: 320px)
  and (max-width: 768px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2) {
    h1 {
      font-size: 2rem;
    }
  }
`


export const StyledLinkButton = styled.div`
    button {
        margin: 1rem 0;
        padding: .5rem;
        width: 10rem;
        border: none;
        border-radius: .3rem;
        font-family: 'Newsreader', serif;
        font-size: 1.5em;
        text-transform: uppercase;
        letter-spacing: .2em;
        background-color: ${props => props.buttonColor || "#383838"};
        color: ${props => props.fontColor || "black"};
    }
`

export const StyledHero = styled.div`
    margin: 5rem auto 0 auto;
    width: 100vw;
    height: 420px;
    display: flex;
    flex-flow: column wrap;
    background-image: url(${props => props.image || "https://static.prod.beantownpub.com/img/drdavisicecream_hero_header.jpg"});
    background-size: cover;
    background-position: center;
    border-bottom: ${props => props.borderBottom || "unset"};
    h1 {
        margin: .5rem auto;
        max-width: 80%;
        font-family: gotham-narrow-ultra;
        font-size: 3.5rem;
        text-transform: uppercase;
        letter-spacing: .2em;
        color: ${COLORS.cyan};
        text-shadow: 2px 2px 8px #000000;
        line-height: 150%;
    }
    h5 {
        margin: .5rem auto;
        padding: .5rem 0;
        max-width: 40rem;
        font-family: satisfy;
        font-size: 3rem;
        color: ${COLORS.yellow};
        text-shadow: 2px 2px 8px #000000;
        letter-spacing: unset;
        text-transform: none;
        line-height: 170%;
    }
    img {
        margin: .5rem auto;
        max-width: 60%;
    }
    @media (min-width: 320px)
    and (max-width: 768px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        h1 {
            font-size: 2rem;
        }
    }
`

export const StyledFooter = styled.div`
  margin: auto;
  padding: 2rem 0;
  display: flex;
  flex-flow: column wrap;
  border-top: .2rem solid #fcba03;
  background-color: ${props => props.backgroundColor || "white"};
  justify-content: center;
  footer {
    color: ${props => props.fontColor || "#1f6696"};
    display: flex;
    font-family: 'Raleway', Arial, sans-serif;
    letter-spacing: .2em;
    margin: auto;
    text-align: center;
    text-transform: uppercase;
  }
  img {
      margin: auto;
      padding: .5rem 0;
      max-width: 20rem;
  }
  h2 {
      margin: 1rem auto;
      text-shadow: 2px 2px 4px ${COLORS.black};
  }
  h3 {
      margin: auto;
      padding: .5rem 0;
      font-size: 1.65em;
      text-shadow: 2px 2px 4px ${COLORS.black};
  }
  h4 {
      margin: auto;
      padding: 1rem 0;
      font-family: 'Raleway', Arial, sans-serif;
      font-size: 2rem;
      color: ${props => props.fontColor || "#1f6696"};
      text-transform: capitalize;
      letter-spacing: none;
      line-height: 150%;
      text-shadow: 2px 2px 4px ${COLORS.black};
  }
`

export const StyledAnchor = styled.div`
    display: flex;
    a {
        margin: .25rem;
        padding: 1rem;
        width: ${props => props.width || "12rem"};
        height: min-content;
        font-family: 'Newsreader', serif;
        background-color: ${props => props.bgColor || "white"};
        border: 1px solid ${props => props.borderColor || "white"};
        border-radius: 6px;
        text-decoration: none;
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .2rem;
        color: black;
    }
`
