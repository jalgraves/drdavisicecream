import React from 'react'

import { PhotoGallery } from './photoGallery/index.js'
import { ContentSection } from "@jalgraves/react-components-library"

import { config } from '../../utils/main.js'
const COLORS = config.colors
const FONTS = config.fonts

const images = [
  "docs_front_filtered@250px.jpg",
  "docs_ice_cream_cake@250px.jpg",
  "docs_brownie_sundae@250px.jpg",
  "docs_fountain@250px.jpg",
  "docs_sundaes_and_splits@250px.jpg",
  "docs_pouring_mix@250px.jpg",
  "docs_banana_split@250px.jpg",
  "docs_funbrella@250px.jpg",
  "docs_making_ice_cream@250px.jpg"
]

export const MainInfo = () => {
  return (
      <ContentSection
        ariaDetails="MainInfo"
        articleMargin="auto"
        backgroundColor="rgba(248, 248, 248, 0.5)"
        borderRadius="4px"
        display="flex"
        flexFlow="column wrap"
        fontFamily={FONTS.content}
        h1Color={COLORS.primaryYellow}
        h1FontFamily={FONTS.headline}
        h1FontSize="3rem"
        h1FontWeight="900"
        h1LineHeight="150%"
        h1Margin="auto"
        h1Padding="1rem"
        h1LetterSpacing=".3rem"
        h1TextTransform="uppercase"
        h1TextShadow="rgb(0, 0, 0) 2px 2px 6px;"
        h2Color={COLORS.black}
        h2FontFamily="'Raleway',Arial,sans-serif"
        h2FontSize="2rem"
        h2FontWeight="600"
        h2TextAlign="left"
        h2LetterSpacing=".3rem"
        h2LineHeight="150%"
        h2TextShadow="rgb(0, 0, 0) 2px 2px 6px;"
        h2TextTransform="uppercase"
        h2Margin="auto"
        h2Padding="2rem"
        h3Color={COLORS.primaryRed}
        h3FontSize="2rem"
        h3FontWeight="600"
        h3LetterSpacing=".3rem"
        h3LineHeight="150%"
        h3TextTransform="uppercase"
        h3TextShadow="rgb(0, 0, 0) 2px 2px 6px;"
        h3Margin="auto"
        margin="2rem auto 2rem auto"
        maxWidth="90vw"
        outline={`.3rem solid ${COLORS.primaryYellow}`}
        padding="2rem"
        textAlign="center"
        width="100%"
      >
        <h1>Doc's Pepperell</h1>
        <h2>67 Hollis Street<br />Pepperell MA, 01463</h2>
        <h3>Fall Hours</h3>
        <h2>Monday - Friday</h2>
        <h2>2:00 to 8:00pm</h2>
        <h2>Saturday - Sunday</h2>
        <h2>12:00 to 8:00pm</h2>
        <PhotoGallery images={images} />
      </ContentSection>
  )
}

export const ErrorPage = () => {
  return (
    <ContentSection bgColor={COLORS.softGray}>
      <section>
        <h1>Dr. Davis Ice Cream</h1>
        <h2>Something has gone awry</h2>
        <h2>The site developer has made a mistake and apologizes in advance for the inconvenience</h2>
      </section>
    </ContentSection>
  )
}
