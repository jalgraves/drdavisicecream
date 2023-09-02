import React from 'react'
import { InfoSection } from './common.js'
import { config } from '../../utils/main.js'
const COLORS = config.colors


const FAQ = () => {
  return (
    <section id="faqSection">
      <h3>Frequently Asked Questions</h3>
      <h4>Do you accept credit cards yes?</h4>
      <p>Yes.</p>
      <h4>Can I have a job?</h4>
      <p>If you would like to apply for a job please come see us in person.</p>
    </section>
  )
}

export const AboutInfo = () => {
  return (
    <div id="aboutInfo">
      <InfoSection
        marginTop="3rem"
        bgColor="transparent"
        h1Color={COLORS.yellow}
        h1LetterSpacing=".3rem"
        h1TextTransform="uppercase"
        fontColor={COLORS.black}>
        <section>
          <h1>Our Story</h1>
          <article>
          <p>Doc Davis, the founder of Dr. Davis Ice Cream, was a popular and colorful figure in Pepperell. His name "Doc" and the "Dr." in Dr. Davis Ice cream stem from the fact that he was known as one of the best veterinarians in the area. Doc specialized in farm animals and did mostly house calls for the local farmers. Wary of the canine set, Doc preferred farm animals to dogs, although he was often seen with his own bull dog as he tended to his veterinary duties.</p>

          <p>On Saturday evenings Doc would host free entertainment for the local folks in Pepperell. Sometimes he would show movies on the side of his house, which still stands today. Other times the Littleton Farmer's Swing Band would entertain with "hillbilly" music. Doc's ice cream became popular because he would serve it to his guests at these gatherings.This encouraged Doc in 1939 to open the small stand in front of his house which is still there today. In addition to making his own ice cream and hosting the town's entertainment Doc also had a reputation as a practical joker. Waldo "Ducky" Parker, an old friend of Doc's, recalls the time he bought a dish of ice cream at the stand and returned to his car to eat it only to find a big wad of cotton at the bottom of the dish. Ducky also said that Doc could take a joke as well as give them, he remembers aiding a group on several occasions in hiding Doc's car in his own back yard.</p>

          <p>Doc eventually sold the business to his neighbor Frank Attridge. One of the employees that Attridge hired was a local high school girl named Rosemary Dee, who lived just down street. This hiring also gained Attridge a routine customer named William "Billy" Graves. Billy grew up in Pepperell and had been visiting Doc's since he was a boy. However as a young man Billy was after more than just the ice cream at Doc's. It was at Doc's that Billy began his courtship of Rosemary Dee. Billy and Rose eventually got married. In 1978, along with Rose's brother John Dee, they purchased Dr. Davis Ice Cream from Attridge.</p>

          <p>Billy, Rose, and John Dee still own and operate the stand today. All the ice cream served at Doc's is still made fresh on the premises by Billy and Rose's eldest son Phil Graves. They've also added a second location just over the boarder in Brookline NH. Though ownership has changed tradition has remained the same, serving the freshest and most delicious ice cream in New England.</p>
          </article>
        </section>
      </InfoSection>
      <InfoSection bgColor={COLORS.darkGray} fontColor={COLORS.yellow} slug="faq">
        <FAQ/>
      </InfoSection>
    </div>
  )
}
