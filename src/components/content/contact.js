import React from 'react'
import { InfoSection } from './common.js'
import { config } from '../../utils/main.js'
import { Map, BrooklineMap } from './map.js'

const COLORS = config.colors

export const PepperellContactInfo = () => {
  const apiKey = process.env.GOOGLE_API_KEY
  return (
    <div>
      <InfoSection
        marginTop="3rem"
        bgColor="transparent"
        h1Color={COLORS.yellow}
        h1LetterSpacing=".3rem"
        h1TextTransform="uppercase"
        h3Color={COLORS.yellow}
        h3LetterSpacing=".3rem"
        h3TextTransform="uppercase"
        fontColor={COLORS.black}>
      <section>
        <h3>Email</h3>
        <h2>drdavisicecream@gmail.com</h2>
        <h1>Doc's Pepperell</h1>
        <h3>Call</h3>
        <h2>978-433-6315</h2>
        <h3>Address</h3>
        <h2>67 Hollis Street<br />Pepperell MA, 01463</h2>
      </section>
      </InfoSection>
      <InfoSection bgColor="transparent">
      <Map
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `225px`, maxWidth: `80%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </InfoSection>
    </div>
  )
}

export const BrooklineContactInfo = () => {
  const apiKey = process.env.GOOGLE_API_KEY
  return (
    <div>
      <InfoSection
        marginTop="1rem"
        bgColor="transparent"
        h1Color={COLORS.yellow}
        h1LetterSpacing=".3rem"
        h1TextTransform="uppercase"
        h3Color={COLORS.yellow}
        h3LetterSpacing=".3rem"
        h3TextTransform="uppercase"
        fontColor={COLORS.black}>
        <section>
          <h1>Doc's Brookline</h1>
          <h3>Call</h3>
          <h2>603-673-6003</h2>
          <h3>Address</h3>
          <h2>75 Route 13 <br />Brookline, NH 03033</h2>
        </section>
      </InfoSection>
      <InfoSection bgColor="transparent">
        <BrooklineMap
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `225px`, maxWidth: `80%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </InfoSection>
    </div>
  )
}
