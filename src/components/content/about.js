import React from 'react'
import { ContentSection } from "@jalgraves/react-components-library"
import { config } from '../../utils/main.js'
const COLORS = config.colors
const FONTS = config.fonts

const FAQ = () => {
  return (
    <ContentSection
      articleFontSize="150%"
      articleMargin="auto"
      backgroundColor={COLORS.backgroundGray}
      borderTop={`.25rem solid ${COLORS.primaryRed}`}
      display="flex"
      flexFlow="column wrap"
      fontFamily={FONTS.content}
      h1Color={COLORS.yellow}
      h1FontFamily={FONTS.headline}
      h1FontWeight="900"
      h1FontSize="2.5rem"
      h1Padding="1.5rem"
      h1LetterSpacing=".3rem"
      h1TextTransform="uppercase"
      h1TextShadow="rgb(0, 0, 0) 2px 2px 6px;"
      h2Color={COLORS.yellow}
      h2FontSize="1.75rem"
      h2FontWeight="600"
      h2LetterSpacing=".1rem"
      h2Padding=".5rem 0"
      lineHeight="250%"
      padding="3rem"
      pFontSize="1.5rem"
      pFontWeight="600"
      pLineHeight="150%"
      pMaxWidth="50rem"
      pPadding=".5rem 0"
    >
      <article>
        <h1>Frequently Asked Questions</h1>
        <h2>Do you accept credit cards?</h2>
        <p>Yes.</p>
        <h2>Do you have a public restroom?</h2>
        <p>Unfortunately we do not, please plan accordingly.</p>
        <h2>Do you sell ice cream I can take home?</h2>
        <p>Yes! We sell premade quarts which are limited to the flavors available but we also sell hand-packed pints and quarts that are available in any flavor.</p>
        <h2>Can I have a job?</h2>
        <p>If you would like to apply for a job please come see us in person.</p>
      </article>
    </ContentSection>
  )
}

export const AboutInfo = () => {
  return (
      <div>
      <ContentSection
        articleFontSize="150%"
        articleLineHeight="150%"
        articleMargin="auto"
        articleMaxWidth="85vw"
        articlePadding="1rem"
        backgroundColor="rgba(248, 248, 248, 0.5)"
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
        h1Padding="1.5rem"
        h1TextShadow="rgb(0, 0, 0) 2px 2px 6px;"
        h1TextTransform="uppercase"
        margin="8rem auto 2rem auto"
        maxWidth="95vw"
        outline={`.2rem solid ${COLORS.yellow}`}
        padding="2rem"
        pColor={COLORS.black}
        pFontSize="1.5rem"
        pFontWeight="600"
        pLineHeight="150%"
        pPadding=".5rem 0"
      >
        <article>
          <h1>Our Story</h1>
          <p>Doc Davis, the founder of Dr. Davis Ice Cream, was a popular and colorful figure in Pepperell. His name "Doc" and the "Dr." in Dr. Davis Ice cream stem from the fact that he was known as one of the best veterinarians in the area. Doc specialized in farm animals and did mostly house calls for the local farmers. Wary of the canine set, Doc preferred farm animals to dogs, although he was often seen with his own bull dog as he tended to his veterinary duties.</p>

          <p>On Saturday evenings Doc would host free entertainment for the local folks in Pepperell. Sometimes he would show movies on the side of his house, which still stands today. Other times the Littleton Farmer's Swing Band would entertain with "hillbilly" music. Doc's ice cream became popular because he would serve it to his guests at these gatherings. This encouraged Doc in 1939 to open the small stand in front of his house which is still there today. In addition to making his own ice cream and hosting the town's entertainment Doc also had a reputation as a practical joker. Waldo "Ducky" Parker, an old friend of Doc's, recalls the time he bought a dish of ice cream at the stand and returned to his car to eat it only to find a big wad of cotton at the bottom of the dish. Ducky also said that Doc could take a joke as well as give them, he remembers aiding a group on several occasions in hiding Doc's car in his own back yard.</p>

          <p>Doc eventually sold the business to his neighbor Frank Attridge. One of the employees that Attridge hired was a local high school girl named Rosemary Dee, who lived just down street. This hiring also gained Attridge a routine customer named William "Billy" Graves. Billy grew up in Pepperell and had been visiting Doc's since he was a boy. However as a young man Billy was after more than just the ice cream at Doc's. It was at Doc's that Billy began his courtship of Rosemary Dee. Billy and Rose eventually got married. In 1978, along with Rose's brother John Dee, they purchased Dr. Davis Ice Cream from Attridge.</p>

          <p>Billy, Rose, and John Dee still own and operate the stand today. All the ice cream served at Doc's is still made fresh on the premises by Billy and Rose's eldest son Phil Graves. Though ownership has changed tradition has remained the same, serving the freshest and most delicious ice cream in New England.</p>
        </article>
      </ContentSection>
      <FAQ/>
      </div>
  )
}
