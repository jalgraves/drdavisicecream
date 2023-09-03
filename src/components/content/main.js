import React from 'react'
import { InfoSection } from './common.js'
import { ContentSection } from './contentBlocks/index.js'
import { Map, BrooklineMap } from './map.js'
import { HeroHeader } from './heroHeader/main.js'

import { config } from '../../utils/main.js'
const COLORS = config.colors
const FONTS = config.fonts

export const MainInfo = () => {
  return (
      <ContentSection
        aria-details="ContentSection"
        backgroundColor="transparent"
        display="flex"
        flexFlow="column wrap"
        h1Color={COLORS.yellow}
        h1FontFamily={FONTS.headline}
        h1FontSize="3rem"
        h1FontWeight="900"
        h1LineHeight="150%"
        h1Margin="auto"
        h1Padding="1rem"
        h1LetterSpacing=".3rem"
        h1TextTransform="uppercase"
        h2Color={COLORS.black}
        h2FontFamily={FONTS.content}
        h2FontSize="2rem"
        h2FontWeight="bold"
        h2LineHeight="150%"
        h2Margin="auto"
        h2Padding="1rem"
        margin="3rem auto 1rem auto"
        padding="2rem"
        textAlign="center"
        width="80vw"
      >
        <section>
          <h1>Doc's Pepperell</h1>
          <h2>67 Hollis Street<br />Pepperell MA, 01463</h2>
          <h2>Opening Saturday May 6th!</h2>
          <h2>hours 12 to 9 daily</h2>
        </section>
      </ContentSection>
  )
}



export const FAQ = () => {
  return (
    <div>
      <InfoSection bgColor={COLORS.softGray} marginTop='5rem'>
        <section>
          <article>
          Frequently Asked Questions
          </article>
        </section>
      </InfoSection>
      <InfoSection bgColor={COLORS.softGray} fontColor='#000000'>
        <section>
          <h3>Frequently Asked Questions</h3>
          <h4>Do you accept credit cards yes?</h4>
          <p>Yes.</p>
          <h4>Do you have a public restroom?</h4>
          <p>Unfortunately we do not, please plan accordingly.</p>
          <h4>Do you sell ice cream I can take home?</h4>
          <p>Yes! We sell premade quarts which are limited to the flavors available but we also sell hand-packed pints and quarts that are available in any flavor.</p>
          <h4>Can I have a job?</h4>
          <p>If you would like to apply for a job please come see us in person.</p>
        </section>
      </InfoSection>
    </div>
  )
}

export const ErrorPage = () => {
  return (
    <div>
      <InfoSection bgColor={COLORS.softGray}>
        <section>
          <h1>Dr. Davis Ice Cream</h1>
          <h2>Something has gone awry</h2>
          <h2>The site developer has made a mistake and apologizes in advance for the inconvenience</h2>
        </section>
      </InfoSection>
    </div>
  )
}
