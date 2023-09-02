import React from 'react'
import { linkProps } from './index.js'
import { config } from '../../utils/main.js'
import { StyledTopNav } from './styles.js'

const COLORS = config.colors
const STATIC_URL = config.urls.static

export const NavBarLogo = (props) => {
  var imgStyles = {position: 'absolute', padding: '.25em'}
  return (
    <a href="/">
      <img style={imgStyles} src={`${STATIC_URL}${props.imgPath}`}  alt="Doc's logo" />
    </a>
  )
}

function TopNavBar(props) {
  const navBar = props.props.map((prop) =>
    <a id={`${prop.text}-link`} key={prop.id} href={prop.name}>{prop.text}</a>
  )
  return (
    <StyledTopNav hoverColor={props.hoverColor} fontColor={props.fontColor}>
      <nav className="top_nav">{navBar}</nav>
    </StyledTopNav>
  )
}

export function navBar(pages) {
  return (
    <TopNavBar
      fontColor={COLORS.white}
      hoverColor={COLORS.cyan}
      props={linkProps(pages, 'top_menu')}
    />
  )
}
