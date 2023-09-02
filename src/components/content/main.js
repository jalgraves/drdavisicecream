import React from 'react'
import { InfoSection } from './common.js'
import { Map, BrooklineMap } from './map.js'
import { HeroHeader } from './heroHeader/main.js'

import { config } from '../../utils/main.js'
const COLORS = config.colors

export const MainInfo = () => {
  return (
    <div>
      <InfoSection
        bgColor="transparent"
        h1Color={COLORS.yellow}
        h1LetterSpacing=".3rem"
        h1TextTransform="uppercase"
        h2Color={COLORS.yellow}
        leftPadding="3rem">
        <section>
          <h1>Doc's Pepperell</h1>
          <h2>67 Hollis Street<br />Pepperell MA, 01463</h2>
          <h2>Opening Saturday May 6th!</h2>
          <h2>hours 12 to 9 daily</h2>
        </section>
      </InfoSection>
    </div>
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
          <p>No.</p>
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
