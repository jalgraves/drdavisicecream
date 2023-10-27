import React from 'react'
import { ContentSection } from "@jalgraves/react-components-library"
import { config } from '../../../utils/index.js'

const COLORS = config.colors
const FONTS = config.fonts
const STATIC_PATH = `${config.urls.static}/img/slider`

const photoStyles = {
  padding: "1rem",
  display: "flex"
}

const imgStyles = {
  maxWidth: "250px",
  border: `.5rem solid ${COLORS.red}`,
  borderRadius: "12px",
  margin: "auto"
}

export const HeroHeader = () => {
  return (
    <ContentSection
      ariaDetails="HeroHeader"
      backgroundColor="rgba(248, 248, 248, 0.5)"
      borderBottom={`.3rem solid ${COLORS.yellow}`}
      display="flex"
      flexFlow="column wrap"
      fontSize="150%"
      h1Color={COLORS.yellow}
      h1FontFamily={FONTS.script}
      h1FontSize="2.75rem"
      h1FontWeight="900"
      h1LineHeight="150%"
      h1Margin="auto"
      h1Padding=".5rem"
      h1LetterSpacing=".3rem"
      h1TextShadow="rgb(0, 0, 0) 2px 2px 6px"
      h2Color={COLORS.red}
      h2FontFamily={FONTS.headline}
      h2FontSize="2.5rem"
      h2FontWeight="900"
      h2LetterSpacing=".3rem"
      h2LineHeight="150%"
      h2TextShadow="rgb(0, 0, 0) 2px 2px 8px"
      h2TextTransform="uppercase"
      h2Margin="auto"
      h2Padding=".5rem"
      headerImgMaxWidth="80vw"
      headerImgPadding="1rem"
      margin="1rem auto 1rem auto"
      padding="4rem"
      textAlign="center"
      width="100vw"
    >
        <picture>
          <source media="(min-width: 400px)" srcSet={`${config.urls.static}/img/logos/drdavisicecream_second_logo.gif`} />
          <img src={`${config.urls.static}/img/logos/drdavisicecream_second_logo_small.gif`} alt="Dr. Davis Ice Cream logo" />
        </picture>
        <h1>Making and serving our own ice cream for over 80 years!</h1>
        <h2>Home of the Doc's Special</h2>
        <div style={photoStyles}>
          <img style={imgStyles} src={`${STATIC_PATH}/docs_special@240px.jpg`}  alt="Doc's Special Sundae" />
        </div>

    </ContentSection>
  )
}
