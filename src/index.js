import React from 'react'
import ReactDOM from 'react-dom'
import { HeroHeader, Footer } from './components/content/common'
import { TopMenuBar, LinkList, TopNavBar, linkProps } from './components/TopBar'
import Routes from './reactRoutes'

const config = require('./config.json')
const PAGES = config.drdavisicecream.pages
const STATIC_URL = config.drdavisicecream.static_url
const COLORS = config.drdavisicecream.colors

function topMenu() {
    return (
        <div >
            <img src={STATIC_URL + "/img/logos/drdavisicecream_logo.png"}  alt="Doc's ice cream logo" />
        </div>
    )
}

function navBar() {
    return (
        <TopNavBar
            fontColor={COLORS.yellow}
            hoverColor={COLORS.red}
            props={linkProps(PAGES, 'top_menu')}
        />
    )
}

const menuList = <LinkList props={linkProps(PAGES, 'menu_list')} />

function navBarLogo() {
    var imgStyles = {position: 'absolute', padding: '.25em'}
    return (
        <a href="/">
            <img style={imgStyles} src={STATIC_URL + "/img/logos/drdavisicecream_navbar_logo.gif"}  alt="Doc's ice cream logo" />
        </a>
    );
}

require('./components/cloudsBg')

ReactDOM.render(
    <TopMenuBar
        bottomMenu=''
        fontColor={COLORS.yellow}
        navBarLogo={navBarLogo()}
        topMenu={topMenu()}
        menuList={menuList}
        navBar={navBar()}
        barColor={COLORS.navBarBlue}
        menuColor={COLORS.gray} />,
    document.getElementById('topBar')
)

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
)

ReactDOM.render(
    <Routes />,
    document.getElementById('app')
)

if (document.getElementById('heroHeader')) {
    ReactDOM.render(
        <HeroHeader borderBottom={`.5rem solid ${COLORS.yellow}`}/>,
        document.getElementById('heroHeader')
    )
}
