import React from 'react'
import ReactDOM from 'react-dom'
import { HeroHeader, Footer } from './components/content/common.js'
import ReactRoutes from './reactRoutes.js'
import { MainMenuBar } from './components/topBar/index.js'
import { canvas, Clouds } from './components/cloudsBg.js'
import { config } from './utils/main.js'

const PAGES = config.pages
const COLORS = config.colors

ReactDOM.render(
  <MainMenuBar
    pages={PAGES}
    fontColor={COLORS.yellow}
    barColor={COLORS.navBarBlue}
    menuColor={COLORS.navBarMenuBackgroundGray}
    menuFontColor={COLORS.navBarBlue}
    menuLinkHoverColor={COLORS.red}
    navBarLogoImgPath="/img/logos/drdavisicecream_navbar_logo.gif"
    slideMenuLogoImgPath="/img/logos/drdavisicecream_logo.png"
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
    <HeroHeader borderBottom={`.5rem solid ${COLORS.yellow}`}/>,
    document.getElementById('heroHeader')
  )
}
