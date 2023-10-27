import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client"
import { HeroHeader } from './components/content/heroHeader/index.js'
import { Footer } from './components/content/footer/index.js'
import ReactRoutes from './reactRoutes.js'
import { MainMenuBar } from "@jalgraves/react-components-library"
import { canvas, Clouds } from './components/backgrounds/cloudsBg.js'
import { config } from './utils/main.js'

const PAGES = config.pages
const COLORS = config.colors
const FONTS = config.fonts
const IMG_STYLES = {
  margin: ".5em auto",
  padding: "1em 0",
  maxWidth: "60vw",
  maxHeight: "4rem",
  position: "absolute",
  left: "4rem",
  top: "1rem"
}

// const container = document.getElementById("app")
// const footerContainer = document.getElementById("footer")
// const topBarContainer = document.getElementById("topBar")
// const app = createRoot(container)
// const footer = createRoot(footerContainer)
// const topBar = createRoot(topBarContainer)



ReactDOM.render(
  <MainMenuBar
    pages={PAGES}
    fontColor={COLORS.white}
    fontFamily={FONTS.footer}
    barColor={COLORS.navBarBlue}
    navBarLogoImgStyles={IMG_STYLES}
    slideMenuBackgroundColor={COLORS.navBarMenuBackgroundGray}
    slideMenuFontColor={COLORS.navBarBlue}
    slideMenuFontFamily={FONTS.footer}
    slideMenuFooterText="Est. 1939"
    slideMenuFooterFontColor={COLORS.yellow}
    slideMenuLinkListBorder={`.1rem solid ${COLORS.navBarBlue}`}
    slideMenuLinkListBorderRadius="4px"
    hoverColor={COLORS.yellow}
    mainMenuBarImgSource={`${config.static_url}/img/logos/docs_navbar_logo@450px.gif`}
    slideMenuLogoImgSource={`${config.static_url}/img/logos/docs_logo@255px.png`}
  />,
  document.getElementById("topBar")
)

Clouds(canvas)

ReactDOM.render(
  <Footer/>,
  document.getElementById('footer')
)

ReactDOM.render(
  <ReactRoutes />,
  document.getElementById("app")
)

if (document.getElementById('heroHeader')) {
  ReactDOM.render(
    <HeroHeader/>,
    document.getElementById('heroHeader')
  )
}
