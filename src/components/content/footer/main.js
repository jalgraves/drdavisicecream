import React from 'react'
import { SocialNav } from '../social.js'
import { ContentSection } from "@jalgraves/react-components-library"
import { config } from '../../../utils/index.js'

const COLORS = config.colors
const FONTS = config.fonts

export const Footer = () => {
  const year = new Date().getFullYear()
  const gitHash = process.env.GIT_HASH
  const version = process.env.VERSION
  return (
    <ContentSection
      ariaDetails="Footer"
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
        <h1>Est. 1939</h1>
        <img src={`${config.urls.static}/img/logos/drdavisicecream_logo.png`} alt="Dr. Davis ice cream logo" />
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
