import React from 'react'
import { StyledHero } from './styles.js'

export const HeroHeader = (props) => {
    return (
        <StyledHero image={props.image}>
            <h1>{props.children}</h1>
        </StyledHero>
    )
}
