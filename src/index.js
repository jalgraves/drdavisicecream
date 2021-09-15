import React from 'react'
import ReactDOM from 'react-dom'
import { MainInfo, AboutInfo, ContactInfo, OurTeam, Services, Friends, FAQ } from './components/pages'
import { HeroHeader, Footer } from './components/common'
import { TopMenuBar, LinkList, TopNavBar, linkProps } from './components/TopBar'
require('dotenv').config()
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

if (document.getElementById('heroHeader')) {
    ReactDOM.render(
        <HeroHeader/>,
        document.getElementById('heroHeader')
    )
}

if (document.getElementById('aboutInfo')) {
    ReactDOM.render(
        <AboutInfo/>,
        document.getElementById('aboutInfo')
    )
}

if (document.getElementById('contactInfo')) {
    ReactDOM.render(
        <ContactInfo/>,
        document.getElementById('contactInfo')
    )
}

if (document.getElementById('mainInfo')) {
    ReactDOM.render(
        <MainInfo/>,
        document.getElementById('mainInfo')
    )
}
