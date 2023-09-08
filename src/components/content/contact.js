import React from 'react'
import { ContentSection } from './contentBlocks/index.js'
import { config } from '../../utils/main.js'
import { Map, BrooklineMap } from './map.js'

const COLORS = config.colors
const FONTS = config.fonts

export const PepperellContactInfo = () => {
  const apiKey = process.env.GOOGLE_API_KEY
  return (
    <div>
      <ContentSection
        backgroundColor="transparent"
        borderRadius="4px"
        display="flex"
        flexFlow="column wrap"
        fontColor={COLORS.black}
        fontFamily={FONTS.content}
        h1Color={COLORS.yellow}
        h1FontFamily={FONTS.headline}
        h1FontSize="3rem"
        h1FontWeight="900"
        h1LetterSpacing=".3rem"
        h1Padding="1rem"
        h1TextShadow="rgb(0, 0, 0) 2px 2px 6px;"
        h1TextTransform="uppercase"
        h2Color={COLORS.yellow}
        h2FontFamily={FONTS.button}
        h2FontSize="2.5rem"
        h2LetterSpacing=".3rem"
        h2Padding="1rem"
        h2TextShadow="rgb(0, 0, 0) 2px 2px 6px;"
        h2TextTransform="uppercase"
        lineHeight="150%"
        margin="8rem 0 0 0"
        maxWidth="95vw"
        outline={`.25rem solid ${COLORS.yellow}`}
        padding="1rem"
        pColor={COLORS.black}
        pFontSize="2rem"
        pFontWeight="bold"
        pLetterSpacing=".1rem"
        pLineHeight="150%"
        pPadding="1rem"
      >
        <section>
          <h2>Email</h2>
          <p>drdavisicecream@gmail.com</p>
          <h1>Doc's Pepperell</h1>
          <h2>Call</h2>
          <p>978-433-6315</p>
          <h2>Address</h2>
          <p>67 Hollis Street<br />Pepperell MA, 01463</p>
        </section>
      </ContentSection>
      <ContentSection backgroundColor="transparent" padding="1rem" margin="auto">
      <Map
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `225px`, maxWidth: `80%`, margin: `auto` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </ContentSection>
    </div>
  )
}

export const BrooklineContactInfo = () => {
  const apiKey = process.env.GOOGLE_API_KEY
  return (
    <div>
      <ContentSection
        marginTop="1rem"
        bgColor="transparent"
        h1Color={COLORS.yellow}
        h1LetterSpacing=".3rem"
        h1TextTransform="uppercase"
        pColor={COLORS.yellow}
        pLetterSpacing=".3rem"
        pTextTransform="uppercase"
        fontColor={COLORS.black}>
        <section>
          <h1>Doc's Brookline</h1>
          <p>Call</p>
          <h2>603-673-6003</h2>
          <p>Address</p>
          <h2>75 Route 13 <br />Brookline, NH 03033</h2>
        </section>
      </ContentSection>
      <ContentSection bgColor="transparent">
        <BrooklineMap
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `225px`, maxWidth: `80%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </ContentSection>
    </div>
  )
}
