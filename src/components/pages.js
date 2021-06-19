import React from 'react'
import { InfoSection } from './common'
import { Map, BrooklineMap } from './map'
// import { ContactForm } from './contactForm'
// import { LinkButton } from './common'

const config = require('./../config.json')
const COLORS = config.drdavisicecream.colors

export const MainInfo = () => {
    return (
        <div>
            <InfoSection bgColor="transparent">
                <section>
                    <h1>Doc's Pepperell</h1>
                    <h2>67 Hollis Street<br />Pepperell MA, 01463</h2>
                    <h2>Open 12 to 9 Daily</h2>
                    <h1>Doc's Brookline</h1>
                    <h2>75 Route 13 <br />Brookline, NH 03033</h2>
                    <h2>Open 12 to 9 Daily</h2>
                </section>
            </InfoSection>
        </div>
    )
}

export const AboutInfo = () => {
    return (
        <div>
            <InfoSection bgColor={COLORS.softGray} marginTop="1rem">
                <section>
                    <h1>Our Story</h1>
                </section>
            </InfoSection>
            <InfoSection bgColor={COLORS.softGray} fontColor={COLORS.black}>
                <section>
                    <article>
                    <p>Doc Davis, the founder of Dr. Davis Ice Cream, was a popular and colorful figure in Pepperell. His name "Doc" and the "Dr." in Dr. Davis Ice cream stem from the fact that he was known as one of the best veterinarians in the area. Doc specialized in farm animals and did mostly house calls for the local farmers. Wary of the canine set, Doc preferred farm animals to dogs, although he was often seen with his own bull dog as he tended to his veterinary duties.</p>

                    <p>On Saturday evenings Doc would host free entertainment for the local folks in Pepperell. Sometimes he would show movies on the side of his house, which still stands today. Other times the Littleton Farmer's Swing Band would entertain with "hillbilly" music. Doc's ice cream became popular because he would serve it to his guests at these gatherings.This encouraged Doc in 1939 to open the small stand in front of his house which is still there today. In addition to making his own ice cream and hosting the town's entertainment Doc also had a reputation as a practical joker. Waldo "Ducky" Parker, an old friend of Doc's, recalls the time he bought a dish of ice cream at the stand and returned to his car to eat it only to find a big wad of cotton at the bottom of the dish. Ducky also said that Doc could take a joke as well as give them, he remembers aiding a group on several occasions in hiding Doc's car in his own back yard.</p>

                    <p>Doc eventually sold the business to his neighbor Frank Attridge. One of the employees that Attridge hired was a local high school girl named Rosemary Dee, who lived just down street. This hiring also gained Attridge a routine customer named William "Billy" Graves. Billy grew up in Pepperell and had been visiting Doc's since he was a boy. However as a young man Billy was after more than just the ice cream at Doc's. It was at Doc's that Billy began his courtship of Rosemary Dee. Billy and Rose eventually got married. In 1978, along with Rose's brother John Dee, they purchased Dr. Davis Ice Cream from Attridge.</p>

                    <p>Billy, Rose, and John Dee still own and operate the stand today. All the ice cream served at Doc's is still made fresh on the premises by Billy and Rose's eldest son Phil Graves. They've also added a second location just over the boarder in Brookline NH. Though ownership has changed tradition has remained the same, serving the freshest and most delicious ice cream in New England.</p>
                    </article>
                </section>
            </InfoSection>
        </div>
    )
}

export const ContactInfo = () => {
    const api_key = "AIzaSyAXB15L0ZUglrIv_DlWz7XrVSQ0g6lGiwI"
    return (
        <div>
        <InfoSection bgColor={COLORS.softGray}>
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
        <InfoSection bgColor='#383838'>
            <Map
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${api_key}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `225px`, maxWidth: `80%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </InfoSection>
        <InfoSection bgColor={COLORS.softGray}>
            <section>
                <h1>Doc's Brookline</h1>
                <h3>Call</h3>
                <h2>603-673-6003</h2>
                <h3>Address</h3>
                <h2>75 Route 13 <br />Brookline, NH 03033</h2>
            </section>
        </InfoSection>
        <InfoSection bgColor='#383838'>
            <BrooklineMap
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${api_key}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `225px`, maxWidth: `80%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
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